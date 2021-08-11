import React from 'react';
import './css/App.css';
import Login from './components/Login';
import {useSelector, useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state/index'

function App() {

  const account = useSelector( (state) => state.account)
  const dispatch = useDispatch()

  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch)
  
  return (
    <div className="App">
      <header className="app__body">
        <h1>{account}</h1>
        <button onClick={() => depositMoney(1000)}>Deposit</button>
        <button onClick={() => withdrawMoney(500)}>Withdraw</button>
        <Login />
      </header>
    </div>
  );
}

export default App;
