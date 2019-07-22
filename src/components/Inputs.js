import React from 'react';

const Inputs = ({currency, value, total, handleChange}) => (
  <div className="cryptoCalc--inputs">
    <div className="input-usd">
      <label htmlFor="usd-field">USD</label>
      <input 
      type="number" 
      name="usd" 
      id="usd-field"
      value={value}
      onChange={(event) =>handleChange(event.target)}
      /> 
    </div>

    <div className="input-crypto">
      <label htmlFor="crypto-field">{currency}</label>
      <input  
      name="crypto-field" 
      id="crypto-field"
      value={total}
      /> 
    </div>
  </div>
)

export default Inputs;