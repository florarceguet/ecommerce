import React, { Component } from 'react';
import Search from './components/search';
import './App.scss';
require('bootstrap');

class App extends Component {
  render() {
    return (
      <div className="App">
<Search></Search>      </div>
    );
  }
}

export default App;
