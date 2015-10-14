FROM node:4.2.1

MAINTAINER John Lin <linton.tw@gmail.com>

# Download json server
RUN apt-get update && \
    apt-get install -qy --no-install-recommends unzip wget && \
    wget -O /opt/nodejs.zip "http://github.com/John-Lin/docker-node/archive/master.zip" --no-check-certificate && \
    unzip -q /opt/nodejs.zip -d /opt && \
    cp /opt/docker-node-master/jsonServer/json-server.js /opt && \
    cp /opt/docker-node-master/jsonServer/package.json /opt && \
    cd /opt && npm install

# Clean up APT and zip when done.
RUN apt-get clean && rm -rf /opt/nodejs.zip

WORKDIR /opt

CMD ["node", "/opt/json-server.js"]
