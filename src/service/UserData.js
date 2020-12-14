const UserType = {
    "citizen":"citizen",
    "official":"official"
}

class UserData {
    constructor(uid,displayName,email,userType) {
        this.uid = uid
        this.displayName = displayName
        this.email = email
        this.userType = userType
    }
    getUserType() {
        return this.userType
    }
    getId() {
        return this.uid
    } 
}
export { UserData, UserType }