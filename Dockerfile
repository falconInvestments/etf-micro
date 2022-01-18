FROM node:latest

WORKDIR /usr/src/


COPY . .

RUN npm install


EXPOSE 5280

CMD ["npm", "run", "start"]