import React from 'react'

export default function CartItem({item,value}) {
    const {id,img,title,price,total,count} = item;
    const {increment,decrement,removeItem} = value;
  return (
    <div className="row my-1 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
            <img src={img} alt={title} className="img-fluid" style={{width:"5rem",height:"5rem"}}/>
        </div>
        <div className="col-10 mx-auto col-lg-2">
            {title}
        </div>
        <div className="col-10 mx-auto col-lg-2">
            {price}
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <div className="d-flex justify-content-center">
                <span className="btn btn-black mx-2" onClick={()=>decrement(id)}>-</span>
                {count}
                <span className="btn btn-black mx-2" onClick={()=>increment(id)}>+</span>
            </div>
            
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <div className="cart-icon" onClick={()=>removeItem(id)}>
            <i className="fas fa-trash"></i>
            </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
            {total}
        </div>
    </div>
  )
}
