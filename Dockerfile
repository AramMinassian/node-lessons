FROM node:current

WORKDIR /app

COPY package.*json ./
COPY ormconfig.json ./
COPY tsconfig.json ./

RUN npm install

COPY ./src ./

EXPOSE 4000

CMD npm run dev

