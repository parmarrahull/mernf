import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Signup from './component/Signup';
import Updateuser from './component/Updateuser';
import Users from './component/Users';
import Home from './component/Home';
import Navbar from './component/Navbar';


function App() {
  return (
   <>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/Updateuser/:id" component={Updateuser} />
    </Switch>
   </>
  );
};

export default App;
