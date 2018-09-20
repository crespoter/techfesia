import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/Register';
import SendMessage from './components/SendMessage'
import UpdateUser from './components/UpdateUser'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Register} />
            <Route exact path='/sendMessage' component={SendMessage} />
            <Route exact path='/updateUser' component={UpdateUser} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
