import React from 'react';
import './App.css';
import Category from './Category';
import Wish from './wishlist';
import Cart from './cart'
import Login from './login'
import Nav from './nav'
import Home from './home'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
      <Nav/>
      <Switch>
      <Route path ="/" exact component ={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/categories" component={Category} />
      <Route path="/Login" component={Login} />
      <Route path="/wishlist" component={Wish} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
