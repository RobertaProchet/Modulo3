#!/bin/sh

echo "Executing the container"

#echo "Waiting for postgres..."
#echo "${POSTGRES_HOST}:5432"
#while ! nc -z "$POSTGRES_HOST" 5432; do
#    sleep 1
#done
#echo "PostgresSQL started"

python manage.py migrate

gunicorn --bind :80 --workers 3 service.wsgi:application

exec "$@"