import React from 'react';
// import UseState from './components/hooks/useState';
// import UseEffect from './components/hooks/UseEffect';
// import UseReducer from './components/hooks/UseReducer';

import {Switch,Route} from "react-router-dom";
//import Todo from './components/todo/Todo';

//import Temp from './components/weather/Temp';
import Navbar from './website/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Home from './website/Home'
import About from './website/About'
import Service from './website/Service'
import Contact from './website/Contact'
import { Redirect } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/service' component={Service}/>
      <Route exact path='/contact' component={Contact}/>
      <Redirect to='/'/>
    

    </Switch>
 
     

    </>
  )
}

export default App
 

