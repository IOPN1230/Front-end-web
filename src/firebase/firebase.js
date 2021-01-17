import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


var firebaseConfig = {
    apiKey: "AIzaSyAlxaXj3VYYgctozrPo2xsBQ_RCo6AilJ4",
    authDomain: "bauhinia-92b72.firebaseapp.com",
    databaseURL: "https://bauhinia-92b72.firebaseio.com",
    projectId: "bauhinia-92b72",
    storageBucket: "bauhinia-92b72.appspot.com",
    messagingSenderId: "378948119177",
    appId: "1:378948119177:web:5c724dffdd331f4b34f458",
    measurementId: "G-ZGNNTX402B"
  };
  
export const initializeFirebase = () => {
    if(!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }
}