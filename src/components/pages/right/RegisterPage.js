import React, { useState } from 'react'
import {useHistory } from 'react-router-dom';
import {useStore} from '../../../context'
import RegisterForm from '../../Form'

const RegisterPage= (props) => {
  const history =useHistory()
  const [formData,setFormData]=useState({email:'',password:''})
  var {firebase, userStore}=useStore()
 
  return (
    <div>
        тут логин
        <RegisterForm submitActionInFirebase={firebase.register} history={history}/>
      <button id='loginButton' >Войти</button>
    </div >
  )

}
export default RegisterPage
// import withFormHandling from './path/to/Components/FormHandler'
// const Form = props => {/* Component Logic */}
// export default withFormHanlding(Form);