docker run -d \
    --log-opt max-size=10m --log-opt max-file=5 \
    --name messaging_db_container \
    -p 5435:5432 \
    -e POSTGRES_USER=hermes \
    -e POSTGRES_PASSWORD=lapsus \
    -e POSTGRES_DB=messaging_db \
    -v /home/tuddor/temp/messaging_db:/var/lib/postgresql/data \
    postgres -c log_statement=all