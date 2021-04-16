import React, { useState } from 'react'
import {useHistory } from 'react-router-dom';
import {useStore} from '../../../context'
import LoginForm from '../../Form'

const LoginPage= (props) => {
  const history =useHistory()
  const [formData,setFormData]=useState({email:'',password:''})
  var {firebase, userStore}=useStore()
 
  return (
    <div>
        тут логин
        <LoginForm submitActionInFirebase={firebase.login} history={history}/>
      <button id='loginButton' >Войти</button>
    </div >
  )

}
export default LoginPage
// import withFormHandling from './path/to/Components/FormHandler'
// const Form = props => {/* Component Logic */}
// export default withFormHanlding(Form);