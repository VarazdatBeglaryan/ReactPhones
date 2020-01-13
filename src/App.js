import React from 'react';
import './App.css';
import Main from "./pages/Main"
import { Switch, Route, } from "react-router-dom";
import PhoneDetails from './pages/PhoneDetails';
import Nav from './components/Nav';
import Error from "./pages/Error"
import Cart from './pages/Cart';


function App() {

  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/details/:id" component={PhoneDetails} />
        <Route path="/cart" component={Cart} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
