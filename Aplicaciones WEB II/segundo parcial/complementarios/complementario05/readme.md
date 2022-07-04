
## instruciones para implementacion

1. primero debemos construir las imagenes sobre el docker file y el docker compose
2. ejecutar el comando docker-compose up -d
3. se descargaran las imagenes necesarias de mongo, node y nginx, en caso de no tener la ultima version
4. se crearan y ejecutaran tres contenedores: api, mongoDB y nginxServer



## especificaciones

* la api trabaja internamente en el puerto 3000, pero se accede a traves del puerto 2500
* el servidor nginx correra por el puerto 80 y para acceder a la api se usara http://clientes:2500/v2/api/clientes