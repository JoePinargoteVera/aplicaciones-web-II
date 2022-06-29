FROM node
COPY . /app
WORKDIR /app
COPY package*.json /app/
RUN npm install
EXPOSE 3000
ENTRYPOINT [ "npm","start" ] 