import  React, { useEffect, useState } from 'react'; 
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd';
import { Products, ProductDetails, ProductComponent, Homepage } from './components/shop/pages'
import { Login, Register } from './components/auth/'
import { Dashboard } from './components/manage';
import { useStore } from './store/store'
import firebase from './config/firebase'
import axios from 'axios'
import { Header } from './components/layouts'
import { auth } from './config/firebase'


function App() {
  // @ts-ignore
  const currentUser = useStore(state => state.currentUser);
  // @ts-ignore
  const setProducts = useStore((state) => state.setProducts);
  // @ts-ignore
  
  const fetchProducts = async () => {
    // eslint-disable-next-line
    const response = await axios.get('https://fakestoreapi.com/products')
                          .then( (res) => { setProducts(res.data) })
                          .catch((err) => { console.log("err", err) })
  }
  // eslint-disable-next-line
  useEffect(() => {
    fetchProducts() 
  })
    
  

  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/products" exact component={Products} />
          <Route path="/dashboard" component={Dashboard} />
          {/* <Route path="/login" component={Login}/> */}
          <Route path="/login" render={ () => currentUser ? <Redirect to="/" /> : (
            <Login />
          )}/>
          <Route path="/register"  component={Register}/>
          <Route path="/product/:productId" exact component={ProductDetails} />
          <Route>404 not found</Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;

