# Order Frontend Demo

This is a demo Angular app. Backend REST API service can be found in [order-service-demo](https://github.com/Denis-Mak/order-service-demo)  

## To run standalone in development mode

Install all required packages `npm install`

In a separate terminal session run mock API server `node src/app/testing/rest-mock.js`

Then run `ng serve`

## To run in prod mode with Docker

Create Docker network for communication between container with Angular app
 and REST API container `docker network create demo-net`
 
Run REST API container (container name `api` is important, do not change it): `docker run --network demo-net --name api -d denismakarskiy/order-service-demo`

Run UI app container: `docker run --network demo-net --name ui -p 80:80 -d denismakarskiy/order-frontend-demo`
