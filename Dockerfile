FROM node


WORKDIR /app


COPY package.json /app


RUN npm install


COPY . .


ENV PORT=${PORT}
EXPOSE $PORT


CMD ["node", "server.js"]