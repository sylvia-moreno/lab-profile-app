import React, { Component } from 'react';

import Home from './components/home';
import Signup from './components/auth/signup';
import Login from './components/auth/login';
import Profil from './components/profil';

import AuthService from './components/auth/auth-service';

import { Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService(); 
  }

  fetchUser() {
    if (this.state.loggedInUser === null){
      this.service.loggedin()
        .then(response => {
          this.setState({loggedInUser: response})
        })
        .catch(err => {
          this.setState({loggedInUser: false}) 
        })
    }
  }
  

  componentDidMount() {
    this.fetchUser();
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    return (
      <div className="App">
        <div className="profil-wrapper">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/signup' render={() => <Signup getUser={this.getTheUser}/>} />
            <Route path='/login' render={() => <Login getUser={this.getTheUser}/>} />
            <Route path='/profil' render={() => <Profil getUser={this.getTheUser}/>} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
