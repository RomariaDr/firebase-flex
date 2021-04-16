import React from "react";
import { Route, Redirect } from "react-router-dom";
import {useStore} from '../context'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const {firebase}=useStore()
  return(
  <Route
    {...rest}
    render={props =>
      firebase.auth.currentUser ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      )
    }
  />
);}

export default PrivateRoute;
