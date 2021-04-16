import React, { Component } from "react";
// import './App.scss';
import Container from "./left/Container";
import { Router, Route, Switch, useLocation } from "react-router-dom";
import PrivateRoute from'../PrivateRoute'
import MainPage from './left/MainPage'
import {createBrowserHistory} from 'history'
import LoginPage from './left/LoginPage'
import RegisterPage from './left/RegisterPage'
import ForgotPassword from './left/ForgotPasswordPage'
import {useStore} from '../../context'
import AnimatedSwitch from '../AnimatedSwitch'
import { TransitionGroup, CSSTransition } from "react-transition-group";

const routes = [
  { path: '/login', name: 'Home', Component: LoginPage },
  { path: '/register', name: 'About', Component: RegisterPage },
  { path: '/', name: 'Contact', Component: Container},
]

function LeftSide() {
  var {firebase}=useStore()
  var auth=firebase.auth.currentUser
  const history = createBrowserHistory()
  let location = useLocation();
  console.log(auth)
  return (
    <div id='leftSide'>
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

export default LeftSide;