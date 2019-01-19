import React from 'react'
import {Link} from 'react-router-dom';

export default function CartTotal({value}) {
    const {cartSubtotal,cartTax,cartTotal,clearCart} = value;
  return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-10 ml-md-auto text-capitalize text-right">
                    <Link to="/">
                        <button className="btn btn-outline-danger text-uppercase mb-2" type="button" onClick={()=>clearCart()}>
                            clear cart
                        </button>
                    </Link>
                    <h5>subtotal : ${cartSubtotal}</h5>
                    <h5>tax : ${cartTax}</h5>
                    <h5>total : ${cartTotal}</h5>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}
