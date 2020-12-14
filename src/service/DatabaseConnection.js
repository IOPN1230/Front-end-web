import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeFirebase } from '../firebase/firebase';

initializeFirebase();

class _DatabaseConnection {   
    constructor() {
        this.db = firebase.database(firebase.apps[0]);
    }
    connectToDatabase() {
        this.db.goOnline();
    }
}

export const DatabaseConnection = new _DatabaseConnection()
