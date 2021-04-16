import FormHoc from './FormHOC'
import {useStore} from '../context'
import Firebase from '../firebase/Firebase'
//var {firebase, userStore}=useStore()

const Form=({handleSubmit,handleChange})=>{
  console.log(Firebase)
  return(
<form onSubmit={handleSubmit}>
<input id='email' onChange={handleChange}/>
<input id='password' onChange={handleChange}/>
<button type='submit' >войти</button>
        </form>)}
export default FormHoc(Form)