import React, { Component } from 'react';
import logo from './onclogo_135x135_1.png';

import Container from './components/Container';
import Header from './components/Header';
import './css/App.css';
import './css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <div className="root" style={{backgroundColor: "rgb(77, 179, 208)", height: "100vh"}}>
        <Header logo={logo} />
        <Container className="semantic"/>
      </div>
    )
  }
}

export default App;
