FROM php:7.3-apache

# disables the warning about running commands as root/super user
ENV COMPOSER_ALLOW_SUPERUSER=1

# https://docs.microsoft.com/en-us/azure/app-service/containers/configure-custom-container#enable-ssh
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
 && rm -f /etc/ssh/sshd_config \
 && echo "$SSH_PASSWD" | chpasswd \
 && a2enmod rewrite \
 && docker-php-ext-configure zip --with-libzip \
# https://docs.directus.io/getting-started/installation.html#requirements
 && docker-php-ext-install curl exif fileinfo gd mbstring mysqli pdo pdo_mysql zip

#WORKDIR /var/www
COPY . /var/www/
COPY ssh_setup.sh /tmp
RUN rm -rf /var/www/dockerfs \
 && chown -R www-data:www-data /var/www \
 && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
 && composer install -a --no-interaction -d /var/www \
 && chmod -R +x /tmp/ssh_setup.sh \
 && (sleep 1;/tmp/ssh_setup.sh 2>&1 > /dev/null) \
 && rm -rf /tmp/*

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
