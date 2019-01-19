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

    product.inCart = true;
    product.count = 1;
    
    const price = product.price;
    product.total = price;

    this.setState(()=>{
      return {products : tempProducts,
            cart : [...this.state.cart,product]};
    },
    ()=>{
      this.addTotal();
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
    const tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price ;

    this.setState(()=>{
      return{cart : [...tempCart]};
    },
    ()=>{
      this.addTotal();
    });
  }
  decrement =(id) =>{
    let tempCart = [...this.state.cart];

    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    if(product.count > 0){
      product.count = product.count - 1;
      product.total = product.price * product.count;

      this.setState(()=>{
        return {cart : [...tempCart]};
      },
      ()=>{
        this.addTotal(); 
      })
    }
    else{
      this.removeItem(id);
    }


  }
  removeItem = (id) =>{
    let tempProduct = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProduct.indexOf(this.getProductDetail(id));
    let removeProduct = tempProduct[index];

    removeProduct.inCart = false;
    removeProduct.count = 0;
    removeProduct.total = 0;

    this.setState(()=>{
      return {
        cart : [...tempCart],
        products : [...tempProduct]
      };
    },
    ()=>{
      this.addTotal();
    });
  }
  clearCart = () =>{
    this.setState(()=>{
      return {cart : []};
    },
    () => {
      this.setProducts();
      this.addTotal();
    });
  }
  addTotal = () =>{
    let subtotal = 0;
    this.state.cart.map(item => (subtotal += item.total));

    const tempTax = subtotal*.1;
    const cartTax = parseFloat(tempTax.toFixed(2));

    const total = subtotal + cartTax;

    this.setState(()=>{
      return{
        cartSubtotal : subtotal,
        cartTax : cartTax,
        cartTotal : total
      }
    })
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