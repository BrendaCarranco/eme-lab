import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB1b8DSEsphXC6iROi09Go8DnzwT9N6RYY",
    authDomain: "eme-lab.firebaseapp.com",
    databaseURL: "https://eme-lab.firebaseio.com",
    projectId: "eme-lab",
    storageBucket: "eme-lab.appspot.com",
    messagingSenderId: "906776180001",
    appId: "1:906776180001:web:939db4508539931fda3a60"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };