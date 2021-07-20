FROM node:14-slim

WORKDIR /usr/src/app

COPY package*.json ./

ENV DATA_IP=database

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "start"]