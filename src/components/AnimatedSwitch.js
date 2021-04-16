import React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Container from "../components/pages/right/Container.js";
import PrivateRoute from'./PrivateRoute'
import MainPage from '../components/pages/right/MainPage'
import {createBrowserHistory} from 'history'
import LoginPage from '../components/pages/right/LoginPage'
import RegisterPage from '../components/pages/right/RegisterPage'
import ForgotPassword from '../components/pages/right/ForgotPasswordPage'

const AnimatedSwitch =  withRouter(({ location }) => {
    
  const Home = () => <div className="home">Home Component</div>;
  const First = () => <div className="first">First Component</div>;
  const Second = () => <div className="second">Second Component</div>;
    return(
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={1000}>
        <Switch location={location}>
        <Route  path="/password" >
            <ForgotPassword/>
          </Route>
          <Route  path="/login" >
            <LoginPage/>
          </Route>
          <Route  path="/register" >
            <RegisterPage/>
          </Route>
          <Route exact path="/"  >
            <Container/>
          </Route>
          <PrivateRoute path="/main" component={MainPage}  />
          <Route component={() => <div>No such page!</div>} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )})

export default AnimatedSwitch