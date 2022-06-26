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
  production: true,
};
