import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAurFfGcm1VUuMcbwnmEXzUp2G247dHkr4",
    authDomain: "testutn-5b6a8.firebaseapp.com",
    projectId: "testutn-5b6a8",
    storageBucket: "testutn-5b6a8.appspot.com",
    messagingSenderId: "758384390961",
    appId: "1:758384390961:web:2418784a9bfb5132a97610"
};

firebase.initializeApp(firebaseConfig);


export default firebase