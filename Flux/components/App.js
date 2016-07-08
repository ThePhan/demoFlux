import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';


class App extends React.Component {
  componentDidMount(){
    document.body.className=''
  }
  render(){
    return (
      <div>
        <h1>React Universal Blog</h1>
           <nav>
              <ul>
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="/addProduct">Add Product</Link></li>
                 <li><Link to="/cart">Cart</Link></li>
              </ul>
           </nav>
        { this.props.children }
      </div>
    )
  }
}
export default App;
