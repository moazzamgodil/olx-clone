import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyARPrQ0z2HE2o2AmIcPvb-39tDQYhGLHe0",
    authDomain: "buysell-now.firebaseapp.com",
    databaseURL: "https://buysell-now.firebaseio.com",
    projectId: "buysell-now",
    storageBucket: "buysell-now.appspot.com",
    messagingSenderId: "333900709253",
    appId: "1:333900709253:web:661d7d241fef60c63658ec",
    measurementId: "G-B4V8NXXGYZ"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
// firebase.analytics();