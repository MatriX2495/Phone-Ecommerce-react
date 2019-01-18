import React, { Component } from 'react'
import {storeProducts,detailProduct} from '../data';

//Context object
const ProductContext = React.createContext();
// Context object has two components 1)Provider 2)Consumer

class ProductProvider extends Component {
  state = {
      products : [],
      detailProducts : detailProduct,
      cart : [],
      modalOpen : false,
      modal : detailProduct,
      cartSubtotal : 0,
      cartTax : 0,
      cartTotal : 0
  }

  componentDidMount (){
    this.setProducts();
  }

  setProducts = () =>{
    let tempProducts = [];
    
    storeProducts.forEach(item => {
      const singleProduct = {...item};
      tempProducts = [...tempProducts,singleProduct];
    });

    this.setState(()=>{
      return{
        products : tempProducts
      }
    })
  }

  getProductDetail(id){
    const productDetail = this.state.products.find(item => id===item.id)

    return productDetail;
  }
  handleDetail =(id)=>{
    const product = this.getProductDetail(id);

    this.setState(()=>{
      return {detailProducts:product}
    });
  } 
  addToCart = (id) =>{
    let tempProducts = [...this.state.products];

    const index = tempProducts.indexOf(this.getProductDetail(id));
    const product = tempProducts[index];

    //product is just a reference not an additional object
    product.inCart = true;
    product.count = 1;
    
    const price = product.price;
    product.total = price;

    this.setState(()=>{
      return {products : tempProducts,
            cart : [...this.state.cart,product]};
    },
    ()=>{
      console.log(this.state);
    })
  }
  openModal = id =>{
    const product = this.getProductDetail(id);

    this.setState(()=>{
      return {modalOpen:true,modal : product}
    })
  }
  closeModal = () =>{
    this.setState(()=>{
      return {modalOpen : false}
    })
  }
  increment =(id) =>{
    console.log("test");
  }
  decrement =(id) =>{
    console.log("test");
  }
  removeItem = (id) =>{
    console.log("remove");
  }
  clearCart = () =>{
    console.log("clear");
  }
  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart : this.addToCart,
        openModal : this.openModal,
        closeModal : this.closeModal,
        increment : this.increment,
        decrement : this.decrement,
        clearCart : this.clearCart,
        removeItem : this.removeItem
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};