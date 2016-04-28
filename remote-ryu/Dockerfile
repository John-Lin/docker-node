FROM linton/docker-ryu

MAINTAINER John Lin <linton.tw@gmail.com>

ADD remote-ryu /opt/ryu/remote-ryu

# numpy and scipy Prerequisite
RUN apt-get update && \
    apt-get install -qy --no-install-recommends build-essential gfortran \
      libatlas-base-dev python-dev

# Node.js 6.x Installation
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
    apt-get install -y nodejs && \
    cd /opt/ryu/remote-ryu && npm install

# Download vCPE hub
RUN wget -O /opt/vcpe-hub.zip "https://github.com/vcpe-io/vcpe-hub/archive/master.zip" --no-check-certificate && \
    unzip -q /opt/vcpe-hub.zip -d /opt && \
    mv /opt/vcpe-hub-master /opt/ryu

# vCPE hub dependencies package
RUN pip install -U networkx numpy scipy

# Clean up
RUN rm -rf /opt/vcpe-hub.zip

# Define working directory.
WORKDIR /opt/ryu

CMD ["node", "./remote-ryu/remote-ryu.js"]
