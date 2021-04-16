import React, {Component} from 'react'
import {useHistory } from 'react-router-dom';
import {useStore} from '../context'

function FormHoc(WrappedComponent, submitActionInFirebase,history){
  //const {firebase, userStore}=useStore()
  //const history =useHistory()

  return class  extends Component{
constructor(props){
  super(props)
  this.formData={}
  this.state={
  }
  console.log(this.props)
}
handleChange=(e)=>{ 
  let key=e.target.id
  let value=e.target.value
  this.setState(prev=>({...prev,[key]:value}))
}
handleSubmit=(e)=>{
  e.preventDefault()
    this.props.submitActionInFirebase(this.state,this.props.history)
}
validate=()=>{}
render(){
  return <WrappedComponent {...this.props} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
}
}}

export default FormHoc