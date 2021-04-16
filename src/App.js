import React, { Component } from "react";
import './App.scss';
import Container from "./components/pages/right/Container";
import {  BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from'./components/PrivateRoute'
import MainPage from './components/pages/right/MainPage'
import {createBrowserHistory} from 'history'
import LoginPage from './components/pages/right/LoginPage'
import RegisterPage from './components/pages/right/RegisterPage'
import ForgotPassword from './components/pages/right/ForgotPasswordPage'
import {useStore} from './context'
import RightSide from "./components/pages/RightSide";
import LeftSide from "./components/pages/LeftSide";
import CenterMenu from './components/pages/CenterMenu'
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  var {firebase}=useStore()
  var auth=firebase.auth.currentUser

  const history = createBrowserHistory()
  const location=history.location
  console.log(auth)
  return (
    <div id='container'>
      <BrowserRouter history={history}>
      <LeftSide/>
      <CenterMenu/>
    <RightSide/>
    </BrowserRouter>
    </div>
  );
}

export default App;

// export default class App extends Component {
   
//   constructor() {
//     super();
//     this.state = {
//       data: [],
//       title: "",
//       description: ""
//     };
//     firestore=useFirestore()
//   }

  


//   componentDidMount() {
//     this.getTasks();
//   }

//   dataIndex = () => {
//     return this.state.data.map(task => {
//       return (
//         <div key={task.id}>
//           <strong>Title: </strong>
//           {task.name} <strong>Description: </strong> {task.password}
//         </div>
//       );
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     // Add a new document with a generated id.
//     firebase
//       .firestore()
//       .collection("users")
//       .add({
//         name: this.state.title,
//         password: this.state.description
//       })
//       .then(this.setState({ data: [] })) // Clears the current data
//       .then(() => this.getTasks())
//       .catch(function (error) {
//         console.error("Error adding document: ", error);
//       });
//   };

//   handleChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   };

//   dataForm = () => {
//     return (
//       <form>
//         <input
//           type="text"
//           name="title"
//           placeholder="New Task"
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="description"
//           placeholder="Task Description"
//           onChange={this.handleChange}
//         />
//         <button type="submit" onClick={this.handleSubmit}>
//           {" "}
//           Submit{" "}
//         </button>
//       </form>
//     );
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1> FireList </h1>
//         {this.dataForm()}
//         <div>
//           <br />
//           {this.dataIndex()}
//         </div>
//       </div>
//     );
//   }
// }