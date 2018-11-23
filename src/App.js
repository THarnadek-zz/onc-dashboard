import React, { Component } from 'react';
import logo from './onclogo_135x135_1.png';

import Container from './components/Container';
import Header from './components/Header';
import LoginContainer from './components/LoginContainer';
import './css/App.css';
import './css/semantic.min.css';

class App extends Component {
  state={user: ''}
  setUser = (user) => {
    this.setState({user: user})
  }
  render() {
    return (
      <div className="root" >
        {!this.state.user &&
          <LoginContainer user={this.state.user} handleSubmit={this.setUser}/>
        }
        {this.state.user &&
          <div>
          <Header logo={logo} user={this.state.user} handleLogout={()=>this.setUser('')}/>
            <Container className="semantic"/>
          </div>
        }
      </div>
    )
  }
}

export default App;
