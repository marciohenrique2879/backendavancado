 FROM node:8  
# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app

RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]
