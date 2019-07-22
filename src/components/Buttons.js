import React from 'react'

const Buttons = ({handleClick, currency}) => (

  <div className="cryptoCalc--butons">
    <button className={currency === 'BTC' ? "btn-btc btn active" : "btn-btc btn"} onClick={()=>handleClick('BTC')}></button>
    <button className={currency === 'ETH' ? "btn-eth btn active" : "btn-eth btn"} onClick={()=>handleClick('ETH')}></button>
    <button className={currency === 'LTC' ? "btn-ltc btn active" : "btn-ltc btn"} onClick={()=>handleClick('LTC')}></button>
    <button className={currency === 'BTC' ? "btn-btc btn active" : "btn-btc btn"} onClick={()=>handleClick('BTC')}></button>
  </div>

)

export default Buttons;