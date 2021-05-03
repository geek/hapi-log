hapi-log is an example application to demonstrate using [@hapi/log](https://www.npmjs.com/package/@hapi/log) with Graylog and pino.
There is a custom pino logger that shows how to build a custom logger for @hapi/log.
Also, the application shows how to integrate [@hapi/log](https://www.npmjs.com/package/@hapi/log) with Graylog.

## Instructions

1. `docker-compose up -d`

2. Launch a web browser and go to http://0.0.0.0:9000

3. Login with admin/admin credentials

4. Create a new System -> [Inputs](http://0.0.0.0:9000/system/inputs) for GELF UDP

5. Browse to http://localhost:8080 and http://localhost:8080/err

6. Use the graylog search to view the logs from the server
