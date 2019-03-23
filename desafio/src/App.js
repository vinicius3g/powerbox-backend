import React, { Component } from 'react';
import product from './productJSON';
import './App.css';
import ProductPage from './ProductPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductPage product={product} />
      </div>
    );
  }
}

export default App;
