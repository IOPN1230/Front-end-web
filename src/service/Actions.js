import { DatabaseConnection } from "./DatabaseConnection"

const getTimestamp = (date) => {
    return Date.UTC(date.getUTCFullYear(),date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
}

class DataActions {

    constructor(dbRef) {
        this.dbRef = dbRef
        this.dbRefElements = this.dbRef.child('el')
        this.dbRefKeys = this.dbRef.child('key')
    }

    _prepareData(key,value) {
        return {"key":key, "value":value}
    }
    setValue(key, value) {
        return this.dbRefElements.child(key).set(value).then(()=>{
            let data = this._prepareData(key,value)
            this.dbRefKeys.child(data.key).set(getTimestamp(new Date())).then((snapshotKey)=>{
                return data
            },(reason)=>{
                return null
            })
        },(reason)=>{
            return null
        })
    }
    getValue(key) {
        return this.dbRefElements.child(key).get().then((snapshot)=>{
            return this._prepareData(snapshot.key,snapshot.val())
        },(reason)=>{
            return null
        })
    }
    createAndSetValue(value) {
        return this.dbRefElements.push(value).then((snapshot)=>{
            let data = this._prepareData(snapshot.key,value)
            this.dbRefKeys.child(data.key).set(getTimestamp(new Date())).then((snapshotKey)=>{
                return data
            },(reason)=>{
                return null
            })
        },(reason)=>{
            return null
        })
    }
    getListOfKeys() {
        return this.dbRefKeys.get().then((snapshot)=>{
            return snapshot.val()
        },(reason)=>{
            return null
        })
    }
}

const pathObject = "object"
const pathMap = "map"
const pathSection = "section"
export const ActionsObject = new DataActions(DatabaseConnection.db.ref('/data_'+pathObject+'/'))
export const ActionsMap = new DataActions(DatabaseConnection.db.ref('/data_'+pathMap+'/'))
export const ActionsSection = new DataActions(DatabaseConnection.db.ref('/data_'+pathSection+'/'))
