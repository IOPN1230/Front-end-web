import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeFirebase } from '../firebase/firebase';

initializeFirebase();

class _AuthorizationSystem {
    
    constructor() {
        this.currentUser = null;
        this.auth = firebase.auth()
        this.auth.useDeviceLanguage()
        this.googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    }

    doSigningOut = () => this.auth.signOut()
        .then(()=>{
            return true
        },()=>{
            return false
        });

    doSigningIn = () => this.auth.signInWithPopup(this.googleAuthProvider)
        .then((userCredential) => {
            if(userCredential.user == null) {
                return false
            }
            return true
        },(error) => {
            console.error(error)
            return false
        });
}

export const AuthorizationSystem = new _AuthorizationSystem();
