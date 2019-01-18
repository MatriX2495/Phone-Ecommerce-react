import React, { Component } from 'react'
import {ProductConsumer} from './Context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

export default class ProductDetails extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {id,company,img,info,price,title,inCart} = value.detailProducts;

          return(
            <div className="conatiner py-5">
              <div className="row">
                <div className="col-10 col-md-6 col-lg-4 mx-auto text-center mt-2 mb-5">
                    <h1 className="text-capitalize text-blue">{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 col-md-6 mx-auto">
                  <img src={img} alt={title} className="img-fluid ml-5"/>
                </div>
                <div className="col-10 col-md-6 mx-auto text-capitalize">
                  <h2>model : {title}</h2>
                  <h4 className="text-uppercase text-muted">made by : {company}</h4>
                  <h4 className="text-blue mt-3 mb-2">
                    <strong>
                      price : ${price}
                    </strong>
                  </h4>
                  <p className="font"><strong>some info about product:</strong></p>
                  <p className="text-muted lead mt-2 mb-0">{info}</p>

                  <Link to="/">
                    <ButtonContainer className="mt-5">
                      back to products
                    </ButtonContainer>
                  </Link>
                  <ButtonContainer cart disabled={inCart? true: false} className="ml-3" onClick={()=>{value.addToCart(id);value.openModal(id);}}>
                    {inCart ? "in cart" : "add to cart"}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    )
  }
}
