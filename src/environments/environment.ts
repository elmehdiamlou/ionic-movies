// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

require('dotenv').config();

export const environment = {
  firebase: {
    projectId: 'ionicmovies-7104c',
    appId: '1:770956161654:web:3b8f8c43feb73f168d6557',
    storageBucket: 'ionicmovies-7104c.appspot.com',
    locationId: 'europe-west',
    apiKey: process.env.apiKeyFirebase,
    authDomain: 'ionicmovies-7104c.firebaseapp.com',
    messagingSenderId: '770956161654',
    measurementId: 'G-ZB0EQRTTMB',
  },
  apiKey: process.env.apiKeyMovies,
  baseURL: 'https://api.themoviedb.org/3',
  imagesURL: 'https://image.tmdb.org/t/p',
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
