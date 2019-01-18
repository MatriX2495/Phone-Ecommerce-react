import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from './Context'

export default class ProductList extends Component {
  
  render() {
    return (
      <React.Fragment>
          <div className="container">
            <div className="row">
              <Title name="our" title="products"/>
              <ProductConsumer>
                {value => {
                  return value.products.map(item =>{
                      return <Product key={item.id} product={item}/>;
                  });  
                }}
              </ProductConsumer>
            </div>
          </div>
      </React.Fragment>
    )
  }
}
