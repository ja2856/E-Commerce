import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer'
import { BrowserRouter, Route } from 'react-router-dom';
import ContactUs from './components/Routes/ContactUs'
import Login from './components/Login'
import Header from './components/Header'
//import ReactDom from 'react-dom'
//import BrowserRouter from 'react-router-dom'
//import Footers from './components/Footers'


class App extends Component {
  state = {
    value:"",
    isLoggedin: false
  }
  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }
  handleLogin = () => {
    const { value } = this.state;
    if (value !== "") {
      this.setState({
        isLoggedin: true
      })
    }
  }
  render() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Route path="/" Component={Header} />
      <Route exact path="/ContactUs" Component={ContactUs}/>
      <Route path="/Login"
        render= {props => {
          return (
            <Login 
            {...props}
            handleChange={this.handleChange}
            handleLogin={this.handleLogin}
            isLoggedin={this.isLoggedin}
            value={this.state.value}
            />
          )
        } }
        />
      </BrowserRouter>

      <Footer />
      </div>

)
}
}

export default App;
