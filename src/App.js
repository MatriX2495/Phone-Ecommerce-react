import React, { Component } from 'react'
import './App.css';
import {Switch,Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/details" component={ProductDetails} />
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
          <Modal/>
      </React.Fragment>
    )
  }
}
