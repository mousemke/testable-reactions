# use verified base images with fixed versions tags (don't use 'latest')
FROM node:6.3

# not yet used, but will allow us later to better organzie images
LABEL owner=patata

# port this service exposes
EXPOSE 4080

# by convention use a a folder under /opt to place your service
RUN mkdir /opt/app
WORKDIR /opt/app

# Preferably use COPY over ADD. Beware, COPY is picky about slashes! See
# https://docs.docker.com/engine/reference/builder/#copy
# Best practise - first copy file to install dependencies and install dependencies
# to make best use of caching
COPY package.json ./
RUN npm install

# projcet src files are added in second step.
# If you copy '.' like below from this repo's root file, be sure to include
# a '.dockerignore' file to prevent wrong files to be copied (like 'node_modules'
# when setup on a Mac cannot be used in a Linux Docker container!)
COPY . /opt/app/

# TODO this should be the cmd to run production code. Overwrite this in
# 'docker-compose.yml' for dev code
CMD ["npm", "run", "serve"]
