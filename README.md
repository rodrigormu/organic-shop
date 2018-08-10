# OrganicShop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Adding Firebase

1) After create the proiject, go to the firebase console url `console.firebase.google.com` and create the project. 2) Copy the confirguration properties from "Add Firebase to your web application" (only the properties inside the config object).
3) Paste the properties inside the environments.ts, inside a property named firebase.
4) Install the firebase libraries from NPM (firebase and angularfire2)
5) Go to app.module.ts and import following modules: AngularFireModule, AngularFireDatabaseModule, AngularFireAuth
6) Also initialize the firebase app adding these three lines to the imports array: AngularFireModule.initializeApp(environment.firebase), AngularFireDatabaseModule, AngularFireAuth (Take care with the auto import plugin, it will import 'environment.firebse from environments.prod, change it to environments')

## Adding Bootstrap

Install bootstrap via npm `npm install --save bootstrap` and import this css by adding `@import '~bootstrap/dist/css/bootstrap.css';` to the styles.css file

## Adding Routes

After components creation, the routes can be added to the app.module by adding the RouterModule.forRoot module to the imports array. The parameter must be an array of objects that must have the path and the component linked to it. This array can be defined in external files and imported there. 
Install ng-bootstrap (`npm install --save @ng-bootstrap/ng-bootstrap`) in order to have the directives that replaces the bootstrap javascript libraries. Referes to `https://ng-bootstrap.github.io/#/getting-started` for more details.

## Deploying to Firebase
Once we have the firebase installed, follow these steps to deploy to firebase:
1) run `firebase login` and login to firebase if it is not logged in
2) run `firebase init`. That is a wizard where we can configure our firebase application. Follow the steps until finish. TIP: The public folder is `dist/organic-shop` B/C this is the folder where angular publish the code when we run ng build
3) run `ng build --prod`
4) run `firebase deploy`
