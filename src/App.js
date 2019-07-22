import React from 'react';
import './App.css';
import gateCryptoRate from './api/api';
import Buttons from './components/Buttons';
import Inputs from './components/Inputs';

class App extends React.Component {
  state = {
    valuteData: [],
    currency: 'BTC',
    total: 0,
    value: 0,  
  }

  async componentDidMount() {
    const cryptoRate = await gateCryptoRate();
    this.setState({
      valuteData: cryptoRate,
    })
  }

  handleClick = (valute) => {
    let {valuteData, total, value} = this.state;
    const selectValute = valuteData.filter(val=> val.symbol === valute);
    total = (1 / selectValute[0].price_usd) * value;
    this.setState({
      currency: valute,
      total: total.toFixed(8),
    })
  }


  handleChange = (event) => {
    let {valuteData, total, currency} = this.state;
    let value = event.value;
    const selectValute = valuteData.filter(val=> val.symbol === currency);
    total = (1 / selectValute[0].price_usd) * value;
    this.setState({
      value: value,
      total: total.toFixed(8),
    })
    
  }
  
  render() {
    const {currency, value, total} = this.state
    return (
      <div className="App">
        <Buttons 
          handleClick ={this.handleClick}
          currency={currency}
        />
        <Inputs 
          currency={currency}
          value={value}
          total={total}
          handleChange={this.handleChange}
        />
      </div>
    );
  } 
}

export default App;
