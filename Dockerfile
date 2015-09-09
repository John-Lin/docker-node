FROM node:0.12.7-wheezy

MAINTAINER John Lin <linton.tw@gmail.com>

# Download json server
RUN apt-get update && \
    apt-get install -qy --no-install-recommends unzip wget && \
    wget -O /opt/nodejs.zip "http://github.com/John-Lin/docker-node/archive/master.zip" --no-check-certificate && \
    unzip -q /opt/nodejs.zip -d /opt && \
    cp /opt/docker-node-master/app/json-server.js /opt && \
    cp /opt/docker-node-master/app/package.json /opt && \
    cd /opt && npm install && \
    cd /opt && npm run

WORKDIR /opt
