import * as React from "react"
import  firebase from './firebase/Firebase'
import userStore from './stores/UserStore'

export const context = React.createContext( {firebase,userStore} )
export const useStore = () => React.useContext(context)