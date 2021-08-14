import  React, {useEffect} from 'react';
// import './css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login';
import Products from './components/shop/pages/Products'
import ProductDetails from './components/shop/pages/ProductDetails'
import { useStore } from './store/store'
import firebase from './config/firebase'
import axios from 'axios'
import Header from './components/layouts/Header'
// import Header from './components/layouts/Navigation'


function App() {
  const products = useStore(state => state.products)
  
  const setProducts = useStore((state) => state.setProducts);
  // firebase
  //   .firestore()
  //   .collection("notes")
  //   .add({
  //     title: "Working",
  //     body: "This is to check the Integration is working",
  // })
  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
                          .then( (res) => { setProducts(res.data);}).catch((err) => { console.log("err", err) })
  }
  
  useEffect(() => {
    fetchProducts()
  },[])
    

  return (
    <div className="App">
      {/* <Products/> */}
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/product/:productId" exact component={ProductDetails} />
          <Route>404 not found</Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;

