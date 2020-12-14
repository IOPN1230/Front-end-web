import { BehaviorSubject } from 'rxjs'
import { AuthorizationSystem } from './AuthorizationSystem'
import { DatabaseConnection } from './DatabaseConnection'
import { UserData, UserType } from './UserData'

class _User {   
    constructor() {
        this.onUserChanged = new BehaviorSubject(null);
        this.currentUser = null
        this.currentUserType = UserType.citizen
        AuthorizationSystem.auth.onAuthStateChanged((user)=>{
            this.currentUser = user
            this.currentUserType = null;
            if(user) {
                DatabaseConnection.db.ref('/account_type/'+this.currentUser.uid).get().then((snapshot)=>{
                    this.currentUserType = snapshot.val()
                    if(this.currentUserType == null) {
                        this.currentUserType = UserType.citizen;
                    }
                    this.onUserChanged.next(this.getUserData())
                })
            }
        })
    }

    connectUser() { AuthorizationSystem.doSigningIn() }
    disconnectUser() { AuthorizationSystem.doSigningOut() }
    userIsLoggedIn() {
        if(this.currentUser == null) {
            return false
        } else {
            return true
        }
    }

    /**
     * @returns {UserData|null}
     */
    getUserData() {
        if(this.currentUser == null) {
            return null
        } else {
            let user = new UserData(
                this.currentUser.uid,
                this.currentUser.displayName,
                this.currentUser.email,
                this.currentUserType
            )
            return user
        }
    }

}

export const User = new _User()
