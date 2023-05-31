import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
//import {seedDatabase} from '../seed'
const config = {
    apiKey: "AIzaSyDXHkCYy2qZRG5hDH9vH1duigwQSkRbuA8",
    authDomain: "instgram-6a00a.firebaseapp.com",
    projectId: "instgram-6a00a",
    storageBucket: "instgram-6a00a.appspot.com",
    messagingSenderId: "436034691235",
    appId: "1:436034691235:web:8763c80449cd182976df16"
};


const initializedFirebaseApp = firebase.initializeApp(config);
const { FieldValue } = firebase.firestore;

//console.log('firebase initialized',initializedFirebaseApp)

//seedDatabase(initializedFirebaseApp);
export { initializedFirebaseApp as firebase, FieldValue };