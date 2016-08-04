FROM node:6.3
EXPOSE 6664
WORKDIR /opt/app

COPY . /opt/app

# overwrite config for docker
# TODO directly use ENV variables
COPY docker/variables.js /opt/app

RUN npm install

CMD ["npm", "run", "serve"]
