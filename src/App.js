import React, { Component } from 'react';
import './App.scss';
import Search from './components/search';
import ListProducts from './components/list-products';
// require('bootstrap');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search></Search>
        <div className="jumbotron">  
            <ListProducts></ListProducts>
          </div>
      </div>
    );
  }
}

export default App;
