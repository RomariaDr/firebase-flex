import React, { Component } from "react";
// import './App.scss';
import {observer} from 'mobx-react-lite'
import Container from "./right/Container";
import { Router, Route, Switch,NavLink } from "react-router-dom";
import PrivateRoute from'../PrivateRoute'
import MainPage from './right/MainPage'
import {createBrowserHistory} from 'history'
import LoginPage from './right/LoginPage'
import RegisterPage from './right/RegisterPage'
import ForgotPassword from './right/ForgotPasswordPage'
import {useStore} from '../../context'

function CenterMenu() {
  var {firebase,userStore}=useStore()
  var auth=firebase.auth.currentUser
  const history = createBrowserHistory()
  console.log(auth)
  return (
    // <Router history={history}>
    // <div className="App">
    //     <Switch>
    //       <Route  path="/password" >
    //         <ForgotPassword/>
    //       </Route>
    //       <Route  path="/login" >
    //         <LoginPage/>
    //       </Route>
    //       <Route  path="/register" >
    //         <RegisterPage/>
    //       </Route>
    //       <Route exact path="/"  >
    //         <Container/>
    //       </Route>
    //       <PrivateRoute path="/main" component={MainPage} auth={auth} />
    //       <Route component={() => <div>No such page!</div>} />
    //     </Switch>
    //   </div>
    //    </Router>
    <>
    
    <div id='centerMenu'>
    {userStore.currentUser &&<h3 id='userName'>userStore.currentUser</h3>}
      <NavLink to='/'>Главная</NavLink>
      <NavLink to='/login'>вход</NavLink>
      <NavLink to='/register'>регистрация</NavLink>
      <NavLink to='/'>забыли пароль</NavLink>
  {userStore.currentUser &&(<>
    <NavLink to='/login'>links</NavLink>
    <NavLink to='/register'>for</NavLink>
    <NavLink to='/'>registered users</NavLink>
 </> )}
    </div>
    </>
  );
}

export default observer(CenterMenu);