#se indica que se nesecitara la imagen de nodejs
FROM node

#copiamos los archivos a una carpeta llamada app dentro de nuestra imagen
COPY . /app

# la carpeta app será la carpeta principal
WORKDIR /app
COPY package*.json /app/

# indicamos el comando install
RUN npm install

# definimos el puerto que escuchara nuestro contenedor
EXPOSE 3000

# comando para la ejecucion de nuestra api
ENTRYPOINT [ "npm","start" ] 