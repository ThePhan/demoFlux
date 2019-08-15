import React from 'react';
import {Button, FormGroup, InputGroup, FormControl, ControlLabel, Glyphicon} from 'react-bootstrap';

var Product = React.createClass( {
  getInitialState: function() {
    return{
        data: 'djskjdksjdksjdkjdkjs'
      }

  },
  handleOnchange: function(e){
    this.setState ({data: e.target.value});
  },
  render: function() {
    // <InputGroup id="inputGroup">
    //   <InputGroup.Addon><Glyphicon glyph="user"/></InputGroup.Addon>
    //   <FormControl type="text" placeholder="input name product..." />
    // </InputGroup>
   return (
     <div>
       <h2>Add new Product</h2>
       <div>
            <FormGroup bsSize="large" className="formGroup">
               <InputGroup id="inputGroup">
                 <InputGroup.Addon><Glyphicon glyph="user"/></InputGroup.Addon>
                 <FormControl type="text" placeholder="input name product..." />
               </InputGroup>
               <InputGroup id="inputGroup">
                 <InputGroup.Addon><Glyphicon glyph="user"/></InputGroup.Addon>
                 <FormControl type="text" placeholder="input price...."  />
               </InputGroup>
               <InputGroup id="inputGroup">
                 <InputGroup.Addon><Glyphicon glyph="camera"/></InputGroup.Addon>
                 <FormControl type="text" placeholder="input describe..." onChange={this.handleOnchange} />
               </InputGroup>
            </FormGroup>
              <Button bsStyle="success" bsSize="small" onClick={this.handleSubmit} ><Glyphicon glyph="leaf"/> Add</Button> <br />
       </div>
       {this.state.data}
     </div>
   );
 }
 // TODO demo v.02
 // Create rebase again



 // finish
 
});
export default Product;
