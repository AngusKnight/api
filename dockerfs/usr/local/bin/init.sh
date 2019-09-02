#!/bin/sh
set -e

echo "Starting SSH ..."
service ssh start

# create symlinks for persistent date
mkdir -p /home/site
cp -a /var/www/logs /home/site/ && rm -rf /var/www/logs
ln -s /home/site/logs /var/www/
cp -a /var/www/public/uploads /home/site/ && rm -rf /var/www/public/uploads
ln -s /home/site/uploads/ /var/www/public/

# first arg is `-f` or `--some-option`
if [ "${1#-}" != "$1" ]; then
  set -- apache2-foreground "$@"
fi

exec "$@"
