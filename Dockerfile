FROM node:12.2.0 AS build
COPY . /usr/src/app/
WORKDIR /usr/src/app/

RUN npm install
RUN npm run build --prod

FROM nginx:1.15.8-alpine
RUN rm -rf /usr/share/nginx/html/*

COPY ./deployment/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/order-frontend-demo/ /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]
