
## instruciones para implementacion

    * primero debemos construir las imagenes sobre el docker file y el docker compose
    * ejecutar el comando docker-compose up -d
    * se descargaran las imagenes necesarias de mongo y node, en caso de no tener la ultima version
    * se crearan y ejecutaran dos contenedores, api y mongoDB 

## especificaciones
    - la api trabaja internamente en el puerto 3000, pero se accede a traves del puerto 4000
    - en el navegador usar http://localhost:4000/v2/cliente/api/clientes/clientes
    - con postman enviar un body para ingresar datos a http://localhost:4000/v2/cliente/api/clientes/nuevo/     cliente