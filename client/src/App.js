import React, { Component } from 'react';
import './App.scss';
import Search from './components/search';
import ListProducts from './components/list-products';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Search></Search>
          <div className="jumbotron">
            <ListProducts></ListProducts>
          </div>
          <Route path="/" component={Search} />
          <Route path="/items/" component={ListProducts} />
        </div>
      </Router>

    );
  }
}

export default App;
