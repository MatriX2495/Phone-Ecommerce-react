import React, { Component } from 'react'
import { ProductConsumer } from './Context';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value)=>{
            const {modalOpen,closeModal} = value;
            const {img,title,price} = value.modal;

            if(!modalOpen){
                return null;
            }
            else{
                return(
                    <ModalContainer>    
                        <div className="container">
                            <div className="row">
                                <div id="modal" className="col-9 col-md-6 col-lg-4 mx-auto text-center text-capitalize">
                                    <h5>item added to cart</h5>
                                    <img src={img} className = "img-fluid" alt={title}/>
                                    <h5 className="text-blue">{title}</h5>
                                    <h5 className="text-muted">$ {price}</h5>
                                    <Link to="/">
                                        <ButtonContainer className="mr-3" onClick={()=>closeModal()}>store</ButtonContainer>
                                    </Link>
                                    <Link to="/cart">
                                        <ButtonContainer cart onClick={()=>closeModal()}>go to cart</ButtonContainer>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ModalContainer>    
                );
            }
        }}
      </ProductConsumer>
    ) 
  }
}

const ModalContainer = styled.div`
    position : fixed;
    top : 0;
    bottom : 0;
    left : 0;
    right : 0;
    background : rgba(0,0,0,.3);
    display : flex;
    justify-content : center;
    align-items : center;

    #modal{
        background : var(--mainWhite);
        padding: 20px;
    }
`;

 