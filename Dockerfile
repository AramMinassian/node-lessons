FROM ubuntu:20.04

RUN apt-get update && apt-get install -y curl sudo

RUN curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
RUN sudo apt-get install -y nodejs

WORKDIR /node-lessons

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install
RUN npm install nodemon

COPY . .

CMD [ "nodemon", "server.js" ]

