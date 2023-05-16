# LAB - Class 01

## Project: Server Deployment Practice

### Author: Francisco

### Problem Domain  

Basic API Server where we write some middleware and practice deployment

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/c0d3cisco/code401_example_server/actions) 
- Dev [back-end dev server url](https://example-server-dev-6v4g.onrender.com)
- Prod [back-end prod server url](https://example-server-prod-b8j2.onrender.com)

## Collaborators

Code was written while Ryan Gallaway taught a class for Express. The example server image was created by Ryan Gallaway.

### Setup

#### `.env` requirements (where applicable)

port variable exists within the env sample

#### How to initialize/run your application (where applicable)

clone repo, `npm install`, then run `nodemon` in the terminal

#### Routes

- GET : `/` - specific route to hit
- GET : `/success` - specific route to hit
- GET : `/bad` - specific route to hit
- GET : `*` - specific route to hit

#### Tests

to run tests, after running `npm i`, run the command `npm test`

#### UML

![UML image](./assets/example-server-uml.png)
