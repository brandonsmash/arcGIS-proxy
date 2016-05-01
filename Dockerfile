FROM node:4

WORKDIR /src

ADD . /src

RUN apt-get update && \
    npm install

EXPOSE 3000

CMD ["npm", "start"]
