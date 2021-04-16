import React, { Component } from "react";
// import './App.scss';
import Container from "./right/Container";
import { Router, Route, Switch, useLocation } from "react-router-dom";
import PrivateRoute from'../PrivateRoute'
import MainPage from './right/MainPage'
import {createBrowserHistory} from 'history'
import LoginPage from './right/LoginPage'
import RegisterPage from './right/RegisterPage'
import ForgotPassword from './right/ForgotPasswordPage'
import {useStore} from '../../context'
import AnimatedSwitch from '../AnimatedSwitch'
import {  CSSTransition } from "react-transition-group";

const routes = [
  { path: '/login', name: 'Home', Component: LoginPage },
  { path: '/register', name: 'About', Component: RegisterPage },
  { path: '/', name: 'Contact', Component: Container},
]

function RightSide() {
  var {firebase}=useStore()
  var auth=firebase.auth.currentUser
  const history = createBrowserHistory()
  let location = useLocation();
  console.log(location)

  return (
    <div id='rightSide'>
        {/* <Switch> */}
        {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={1000}
                  appear={true}
                  classNames="loadComponent"
                  unmountOnExit
                >
                  <div className="page" style={{width:'100%',height:'100%'}}>
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
       </div>
  );
}

export default RightSide;