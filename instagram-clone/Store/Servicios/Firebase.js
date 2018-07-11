import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBLorDfQ2-0ukGdRa1wHMLjYW_zfUkwAzg',
  authDomain: 'clone-instagram-ea160.firebaseapp.com',
  databaseURL: 'https://clone-instagram-ea160.firebaseio.com',
  projectId: 'clone-instagram-ea160',
  storageBucket: '',
  messagingSenderId: '159474864073',
};
firebase.initializeApp(config);

export const autenticacion = firebase.auth();
export const baseDeDatos = firebase.database();
