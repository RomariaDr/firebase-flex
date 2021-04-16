import firebase from "firebase/app";
import 'firebase/auth';
import "firebase/firestore";
import userStore from '../stores/UserStore'
import {useHistory} from 'react-router-dom'

const firebaseConfig = {
  apiKey: "AIzaSyCGXrSugnhKn7sQxHOEPpHadnViN8cbFlk",
  authDomain: "fireapp-7ab00.firebaseapp.com",
  projectId: "fireapp-7ab00",
  storageBucket: "fireapp-7ab00.appspot.com",
  messagingSenderId: "511185317375",
  appId: "1:511185317375:web:eb6edd8b8903adaf0dcbca",
  measurementId: "G-RPPLW6VZVQ"
};



// This prevents a warning message for changes to firestore timestamp syntax in the console
// Firestore is still in Beta - in the future this won't be necessary

class Firebase {
  
  constructor(){
    firebase.initializeApp(firebaseConfig)
    this.auth=firebase.auth()
    const firestore = firebase.firestore();
const settings = { /* your settings... */ timestampsInSnapshots: true };
firestore.settings(settings);
this.firebase=firebase
this.firestore=firestore
this.data=[]
this.history=undefined
  }

  register=(formData,history)=>{
    this.history=history
    const {email,password}=formData
    this.auth.createUserWithEmailAndPassword(email,password)
    .then(()=>{
      history.push('/login')
          })
          .catch((error)=>{  
            console.log(error)
      history.push('/')
          })
  }
  login=(formData,history)=>{
    this.history=history
    const {email,password}=formData
    this.auth.signInWithEmailAndPassword(email,password)
    .then(()=>{
userStore.setUser(email)
history.push('/main')
    })
    .catch(()=>{
      userStore.setUser(null)     
history.push('/')
    })
  }
  logout=()=>{
    this.auth.signOut()
  }
  resetPassword=email=>this.auth.sendPasswordResetEmail(email)

  updatePasswird=password=>this.auth.currentUser.updatePassword(password)
  
    getTasks = () => {
    firebase
      .firestore()
      .collection("users")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach((doc,i) => {
          console.log(doc.data())
          let result=doc.data()
          this.data[i]=result

        })
        return this.data
      });
  };
}
export default new Firebase()