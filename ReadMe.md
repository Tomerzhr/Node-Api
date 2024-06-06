# Nodejs By Tomer Zohar

# Users Detailes
Use those detailes to use this api project:

| Type                          | Email                         | Password                                  |
| ----------------------------- | ----------------------------| -------------------|
|Admin           | admin@gmail.com           | test1234     |
|User           | tomerzhr@gmail.com           | Tomer24544!     |

# Postman Documentation
-[Documentation](https://documenter.getpostman.com/view/32739357/2sA3QtcqsP)



# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 8.0.0
- Install [npm.js](https://docs.npmjs.com/cli/v10/commands/npm-install) version 10.8.1
  


# Getting started
- Install dependencies
```
cd <project_name>
npm install
```
- Build and run the project
```
npm run start
```
  Navigate to `http://localhost:3000`


# JavaScript + Node 
The main purpose of this repository is to show a project setup and technology.


## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **controllers**                 | Contains the mideleware controllers of the project  |
| **node_modules**         | Contains all  npm dependencies                                                            |
| **dev-data**                  | Contains the data that used to this project
| **models**        | Models define schemas that will be used in storing and retrieving data from Application database
| **routes**           | Contain all express routes, separated by module/area of application                       
| **utils**      | Api utils with features |
| **config.env**        | Enviroment setting                                                          |
| package.json             | Contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)   | tsconfig.json            | Config settings for compiling source code only written in TypeScript    
| eslintrc.json              | Config settings for TSLint code style checking                                                |


### Running the build
All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.

| Npm Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`                   | Runs full build and runs node on nodemon server.js. Can be invoked with `npm start`                  |
| `start:prod`                   | Full build. Runs ALL build tasks with all watch tasks        |
| `debug`                   | Runs full nodeDB option. Can be invoked with `npm run debug`                                         |


# Common Issues

## npm install fails
The current solution has an example for using a private npm repository. if you want to use the public npm repository, remove the .npmrc file.


