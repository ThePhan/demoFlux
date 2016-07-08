import React, { Component } from 'react'
import { Route, IndexRoute, Link } from 'react-router'
import App from './Flux/components/App';
import addProduct from './Flux/components/addProduct';
import Home from './Flux/components/Home';
import Cart from './Flux/components/Cart';
// Main component

// Pages
class NoMatch extends Component {
  render(){
    return (
      <div>
        <h2>NoMatch</h2>
        <div>404 error</div>
      </div>
    )
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="addproduct" component={addProduct}/>
    <Route path="cart" component={Cart}/>
    <Route path="*" component={NoMatch}/>
  </Route>
)
