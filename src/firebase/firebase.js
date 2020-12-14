import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { firebaseConfig } from './config';

export const initializeFirebase = () => {
    if(!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }
}