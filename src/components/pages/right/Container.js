import React, { useState,useEffect } from 'react'
import { useStore } from '../../../context'
import { useHistory } from 'react-router-dom';


const Container= (props) => {
  console.log(props)
  const  {firebase}  = useStore()
  const [data,setData]=useState([])
  const history=useHistory()

  useEffect(() => {
   var res= firebase.getTasks()
    setData(res)
    console.log(res)
  },[firebase])
 
const handleLogin=()=>{
  console.log('handle login')
history.push('./login')
}
  return (
      <p>
      <button id='loginButton' onClick={handleLogin}>Войти</button>
      <button id='registerButton'>Зарегистрироваться</button>
      </p>
  )

}
export default Container