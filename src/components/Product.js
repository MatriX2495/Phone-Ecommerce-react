import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from './Context';

export default class Product extends Component {
  render() {
    const {id,title,img,price,inCart} = this.props.product;

    return (
      <React.Fragment>
        <ProductWrapper className="col-9 col-md-6 col-lg-3 my-3 mx-auto">
          <div className="card">
            <ProductConsumer>
              {(value) => (
                  <div className="img-container p-5" onClick={()=> value.handleDetail(id)}>
                      <Link to="/details">
                        <img src={img} alt={title} className="card-img-top"/>
                      </Link>
                      <button className="cart-btn" disabled={inCart?true:false} onClick={()=>{value.addToCart(id);value.openModal(id);}}>
                      {
                        inCart?(<p className="text-capitalize text-blue mb-0">in cart</p>):
                        ( <i className="fas fa-cart-plus"></i> )
                      }
                      </button>
                  </div>
                )}
            </ProductConsumer>

            {/*Cart footer*/}
            <div className="card-footer d-flex justify-content-between mb-0 px-3 pt-2 pb-0">
              <p className="align-self-center">{title}</p>
              <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
              </h5>
            </div>
          </div>     
        </ProductWrapper>
      </React.Fragment>
    )
  }
}

const ProductWrapper = styled.div`
.card{
  border-color: transparent;
  transition :all 1s linear;
}
.card-footer{
  background : transparent;
  border-top: transparent;
  transition : all 1s linear;
}
&:hover{
  .card{
    border: .04rem solid rgba(0,0,0,0.2);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
  }
  .card-footer{
    background: rgba(247,247,247);
  }
}
.img-container{
  position: relative;
  overflow : hidden;
}
.card-img-top{
  transition: all 1s linear;
}
.img-container:hover .card-img-top{
  transform: scale(1.2);
}
.cart-btn{
  position: absolute;
  bottom: 0;
  right: 0;
  background: var(--lightBlue);
  color: var(--mainWhite)
  padding: .2rem .4rem;
  border: none;
  border-radius: .5rem 0 0 0;
  transform: translate(100%,100%);
  padding: 5px 10px;
  &:focus{
    border: none;
  }
  &:hover{
    cursor: pointer;
    color: var(--mainWhite);
  }
}
.img-container:hover .cart-btn{
  transform: translate(0,0);
  transition: all 1s linear;
}

`;
