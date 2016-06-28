FROM linton/docker-ryu

MAINTAINER John Lin <linton.tw@gmail.com>

ENV HOME /root
# Define working directory.
WORKDIR /root/ryu

# ADD remote-ryu /opt/ryu/remote-ryu
ADD remote-ryu /root/ryu/remote-ryu

# numpy and scipy Prerequisite
RUN apt-get update && \
    apt-get install -qy --no-install-recommends build-essential gfortran \
      libatlas-base-dev python-dev && \
    rm -rf /var/lib/apt/lists/*

# Node.js 6.x Installation
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
    apt-get install -y nodejs && \
    cd /root/ryu/remote-ryu && npm install

# Download vCPE hub
RUN curl -kL https://github.com/hsnl-dev/vcpe-hub/archive/master.tar.gz | tar -xvz && \
    mv vcpe-hub-master /root/ryu

# RUN wget -O /opt/vcpe-hub.zip "https://github.com/hsnl-dev/vcpe-hub/archive/master.zip" --no-check-certificate && \
#     unzip -q /opt/vcpe-hub.zip -d /opt && \
#     mv /opt/vcpe-hub-master /opt/ryu

# vCPE hub dependencies package
RUN pip install -U networkx numpy scipy requests

CMD ["node", "./remote-ryu/remote-ryu.js"]
