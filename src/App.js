import React from "react";
import NumberFormat from "react-number-format";
import "./App.css";
import photographer from './images/Profil.jpeg'

import {store} from './store';
import {setWithDrawal} from './actions';
import {connect} from 'react-redux';

function App({username,totalAmount}) {
  return (
    <div className="App">
      <img className="App__userpic" src={photographer} alt="user" />
      <p className="App__username">Hello, {username}! </p>
      <div className="App__amount">
        <NumberFormat value={totalAmount} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />
        <p className="App__amount--info">Total Amount</p>
      </div>

      <section className="App__buttons">
        <button onClick={dispatchBtnAction} data-amount="10000">WITHDRAW $10,000</button>
        <button onClick={dispatchBtnAction} data-amount="5000">WITHDRAW $5,000</button>
      </section>

      <p className="App__giveaway">Give away all your cash to charity</p>
    </div>
  );
}

function dispatchBtnAction (e){
  const amountOfMoney = parseInt( e.target.dataset.amount);
  store.dispatch(setWithDrawal(amountOfMoney));
}

const mapStateToProps = (state) => {
  console.log(state)
  return {username:state.username,
          totalAmount:state.balance
    }
}

export default connect(mapStateToProps)(App);
