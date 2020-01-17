import React, {Component} from 'react';
import './App.css';
import Products from "./Components/Products/Products";
import Order from "./Components/Order/Order";

class App extends Component {
  render() {
    return (
        <div className="App">
            <div className="Products">
            <Products/>
            <Order/>
            </div>
        </div>
    )
  }
}

export default App;
