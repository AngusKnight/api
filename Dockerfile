FROM php:7.3-apache

# disables the warning about running commands as root/super user
ENV COMPOSER_ALLOW_SUPERUSER=1

ENV SSH_PASSWD "root:Docker!"
RUN apt-get update -y \
 && apt-get install -y --no-install-recommends \
        git \
        libcurl4-gnutls-dev \
        libpng-dev \
        libxml2-dev \
        libzip-dev \
        openssh-server \
        openssl \
        procps \
        unzip \
        zip \
 && rm -rf /var/lib/apt/lists/* \
# https://docs.microsoft.com/en-us/azure/app-service/containers/configure-custom-container#enable-ssh
 && rm -f /etc/ssh/sshd_config \
 && echo "$SSH_PASSWD" | chpasswd \
# enable mod_rewrite
 && a2enmod rewrite \
# configure PHP
 && mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini" \
# install PHP APCu module
 && yes '' | pecl install apcu \
 && docker-php-ext-enable apcu \
# https://docs.directus.io/getting-started/installation.html#requirements
 && docker-php-ext-configure zip --with-libzip \
 && docker-php-ext-install curl exif fileinfo gd mbstring mysqli opcache pdo pdo_mysql zip

COPY . /var/www/
RUN chown -R www-data:www-data /var/www \
 && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
 && composer install -a --no-interaction -d /var/www \
# configure SSH
 && chmod -R +x /var/www/ssh_setup.sh \
 && (sleep 1;/var/www/ssh_setup.sh 2>&1 > /dev/null) \
# remove extraneous files
 && rm -f /var/www/.git /var/www/.gitignore /var/www/Dockerfile /var/www/azure-pipelines.yml /var/www/ssh_setup.sh

COPY dockerfs/ /
RUN chmod u+x /usr/local/bin/init.sh

ENV PORT 80
ENV SSH_PORT 2222
EXPOSE 80 2222

ENV WEBSITE_ROLE_INSTANCE_ID localRoleInstance
ENV WEBSITE_INSTANCE_ID localInstance
ENV PATH ${PATH}:/home/site/wwwroot

WORKDIR /home/site/wwwroot

ENTRYPOINT ["init.sh"]

CMD ["apache2-foreground"]
