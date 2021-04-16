
import { makeObservable, makeAutoObservable, computed, action, observable, autorun, reaction } from 'mobx' 
import {useHistory} from 'react-router-dom'
class UserStore {
  currentUser = null
  constructor() {
    makeAutoObservable(this, {
      currentUser: observable,
      setUser:action
    })
    
  }
setUser=(user)=>{
this.currentUser=user
}
}

export default new UserStore()