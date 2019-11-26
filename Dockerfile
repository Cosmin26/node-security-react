FROM node:carbon as build-deps
WORKDIR /usr/src/webapp
COPY package*.json ./
RUN npm install
RUN npm audit fix
COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=build-deps /usr/src/webapp/build /var/www
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]