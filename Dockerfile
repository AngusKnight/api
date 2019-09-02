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
        unzip \
        zip \
 && rm -rf /var/lib/apt/lists/* \
 && echo "$SSH_PASSWD" | chpasswd \
 && sed -i -e "s/DocumentRoot \/var\/www\/html$/DocumentRoot \/var\/www\/public/" /etc/apache2/sites-enabled/000-default.conf \
 && a2enmod rewrite \
 && docker-php-ext-configure zip --with-libzip \
# https://docs.directus.io/getting-started/installation.html#requirements
 && docker-php-ext-install curl exif fileinfo gd mbstring mysqli pdo pdo_mysql zip

#WORKDIR /var/www
COPY . /var/www/
RUN rm -rf /var/www/dockerfs \
 && chown -R www-data:www-data /var/www \
 && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
 && composer install -a --no-interaction -d /var/www

COPY dockerfs/ /
RUN chmod u+x /usr/local/bin/init.sh

EXPOSE 80 2222

WORKDIR /var/www/public

ENTRYPOINT ["init.sh"]

CMD ["apache2-foreground"]
