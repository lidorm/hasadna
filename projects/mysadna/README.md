# Mysadna

To set up your development environment, follow these steps:

## Installation
Install these:
* [node](https://nodejs.org/) version 8.11.4
* [npm](https://www.npmjs.com/) version 5.6.0
* [protoc](https://github.com/protocolbuffers/protobuf/releases), version 3.6.1

(Installation of exact versions is not required, but recommended. We can't guarantee that the app will work properly with different versions.)

Optional:
* [firebase](https://firebase.google.com/docs/hosting/quickstart), to be able to deploy.
* [angular](https://angular.io/), to use `ng` features.

Run `npm install` to install node modules  
 
Run `npm run protoc` to generate proto functions. [More info](https://github.com/google/startup-os/blob/master/tools/protoc/README.md).

## Running the server locally
Run `npm start` to start a dev server. Navigate to `http://localhost:4200/`  
Run `npm run build` to make a build.  
Run `npm run deploy` to publish the app on the server.  
Run `npm run functions` to update cloud functions on the server.  

How to use firebase hosting:  
https://firebase.google.com/docs/hosting/quickstart  

How to use firebase functions:  
https://firebase.google.com/docs/functions/get-started  

## Updating protos
After every proto update, run `npm run protoc`.

## Development
The information might be useful:
* [AngularFire](https://github.com/angular/angularfire2/tree/master/docs)
* [Protocol Buffers](https://developers.google.com/protocol-buffers/)
