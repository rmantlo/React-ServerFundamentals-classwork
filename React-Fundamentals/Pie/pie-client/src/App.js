import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Pies from './components/Pies/Pies';

class App extends Component {
  state = {
    sessionToken: 8,
  }

  viewConductor = () => {
    return this.state.sessionToken !== undefined ? <Pies /> : <Auth tokenHandler={this.storeSessionToken} />;
  }

  render() {
    return (
      <div className='app'>
        <Navbar />
        {this.viewConductor() }
      </div>
    );
  }
}

export default App;
