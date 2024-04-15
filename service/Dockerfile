FROM python:3.9-slim-buster

ARG postgres_host=''

ENV PYTHONUNBUFFERED 1
ENV POSTGRES_HOST ${postgres_host}

RUN echo "Starting build"

WORKDIR /service

COPY requirements.txt .


RUN set -ex \
    && apt-get update \
    && apt-get install -y unzip wget curl netcat \
    && pip --version \
    && python --version \
    && pip install --upgrade pip \
    && pip install --no-cache-dir gunicorn \
    && pip --version \
    && python --version \
    && pip install --no-cache-dir -r requirements.txt \
    && rm -rf /var/lib/apt/lists/* \
    && rm -rf /root/.cache \
    && find / -name "*.pyc" -exec rm -f {} \;

COPY . .

EXPOSE 80

#CMD ["gunicorn", "--bind", ":8000", "--workers", "3", "service.wsgi:application"]
#COPY entrypoint.sh .
ENTRYPOINT ["/service/entrypoint.sh"]

