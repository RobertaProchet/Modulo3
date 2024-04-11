# fgv-project-streaming/service

Esse módulo representa o serviço do sistema de streaming. 

## Configuração para desenvolvimento

    python -m venv venv          # Crie o ambiente virtual  -> $ python3 -m venv venv
    venv\Scripts\activate           # Ative o ambiente virtual -> $ source venv/bin/activate
    $ python manage.py createdb     # Crie o banco de dados de desenvolvimento
    $ python manage.py populate     # Crie dados para auxiliar no desenvolvimento 

## Execução do módulo

    $ python manage.py runserver 0:8000
