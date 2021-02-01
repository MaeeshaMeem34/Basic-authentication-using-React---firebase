import firebase from 'firebase/app';
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyA2EgSRpyuqe0BVo9Jm-BEF3dkQnWNF4U4",
    authDomain: "fir-auth-development-79237.firebaseapp.com",
    projectId: "fir-auth-development-79237",
    storageBucket: "fir-auth-development-79237.appspot.com",
    messagingSenderId: "293931220207",
    appId: "1:293931220207:web:974a9d2ffabcd96f826f1a"
});

const auth= app.auth();
export {auth};
export default app;