# node-security-react
A graphql client react application implemented around hooks. It supports 3 mutations around security features such as: Login, Sign-Up, and also getting the currently logged in user from a jwt token. This represents the frontend part of the following repo: https://github.com/Cosmin26/node-security

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites before running this project:
1. Node.js 10 (to run the server in development mode)
2. Docker (to run the containers)

## Usage:
In order to run this app in docker and for it to connect to the backend part of this application you need to run the docker compose file from the backend for it to create the network. After that build the container from the file and run it with:

```
docker build --network="node-security_app-network" -t=node-security-react .
docker run --network="node-security_app-network" -p 3000:80 node-security-react
```
We need to map to the docker container port of 80 as there is an nginx server running the react app in order for routing to work along side gzipping and health-cheks.

Then navigate to http://localhost:3000/ and you will be redirected to the login page.

## Development Usage
The app runs through ```npm start``` at the same address as the docker one.

## Architecture
This project runs with the apollo client and uses hooks in order to manage queries and mutations. To declare new routes for the application you will have to update the contents of the routes folder, firstly the ```paths.js``` then routes.js. They will be automatically registered in the router. This project also makes use of composable ```layouts``` which reside in the ```components``` folder.

## Material-ui
This project makes ui of the material-ui kit for the development of most of the presentation of the app.
