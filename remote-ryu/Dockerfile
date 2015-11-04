FROM linton/docker-ryu

MAINTAINER John Lin <linton.tw@gmail.com>

ADD remote-ryu /opt/ryu/remote-ryu

# Node.js 5.x Installation
RUN curl -sL https://deb.nodesource.com/setup_5.x | bash - && \
    apt-get install -y nodejs && \
    cd /opt/ryu/remote-ryu && npm install

# Download vCPE hub
RUN wget -O /opt/vcpe-hub.zip "https://github.com/vcpe-io/vcpe-hub/archive/master.zip" --no-check-certificate && \
    unzip -q /opt/vcpe-hub.zip -d /opt && \
    mv /opt/vcpe-hub-master /opt/ryu

# vCPE hub dependencies package
RUN pip install -U networkx

# Clean up
RUN rm -rf /opt/vcpe-hub.zip

# Define working directory.
WORKDIR /opt/ryu

CMD ["node", "./remote-ryu/remote-ryu.js"]
