import React, { Component } from 'react';
import './App.scss';
import Search from './components/search';
import ListProducts from './components/list-products';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      products: [],
      data: null
    }
  }
  /** set state with search word */
  searchProducts = term => {
    this.setState({ searchTerm: term });
  }
  componentDidMount() {
    // Call our fetch function below once the component mounts
  this.callBackendAPI()
    .then(res => this.setState({ data: res.express }))
    .catch(err => console.log(err));
}
  /** if search item is changed, call api */
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.getProducts();
    }
  }

   // Fetches our GET route from the Express server.
   callBackendAPI = async() => {
 fetch('/api/hello').then(response => {
      return response.json();
    }).then(body =>{
 
     return body;
    });
 
  };


  /** call api to get data */
  getProducts = () => {
    const term = this.state.searchTerm;

    if (!term) return null;

    let url = `https://api.mercadolibre.com/sites/MLA/search?q=${term}`;

    fetch(url).then(res => {
      return res.json()
    }).then(products => {
      this.setState({ products: products.results })
    })
  }

  render() {
    return (
      <div className="App">
        <Search setItem={this.searchProducts}></Search>
        <div className="jumbotron">
          <ListProducts products={this.state.products}></ListProducts>
        </div>
      </div>
    );
  }
}

export default App;
