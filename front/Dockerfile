# Create image based on the official Node 6 image from dockerhub
FROM node:8 as builder

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Get all the code needed to run the app
COPY . .
# Install dependecies
RUN npm install
RUN npm install -g @angular/cli --save
RUN npm run build

# STEP 2 build a small nginx image with static website
FROM nginx:alpine
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' copy website to default nginx public folder
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist/project /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
