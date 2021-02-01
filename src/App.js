import React from "react";
import SignUp from './components/SignUp';
import LogIn from './components/Login';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import UpdateProfile from "./components/UpdateProfile";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <BrowserRouter >
     <PrivateRoute path ='/' exact component ={Dashboard}/>
     <Route path ='/login' exact component ={LogIn}/>
     <Route path ='/signup' exact component ={SignUp}/>
     <PrivateRoute path ='/updateprofile' exact component ={UpdateProfile}/>
    </BrowserRouter>
  );
}

export default App;
