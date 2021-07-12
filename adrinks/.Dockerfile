FROM node:14

WORKDIR /my-path

COPY ./package.json ./

RUN npm install

COPY . .

EXPOSE 8055

CMD ["npm", "start"]
