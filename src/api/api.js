
const gateCryptoRate = () => {
  return fetch('https://api.coinmarketcap.com/v1/ticker/?convert=USD')
    .then(res => res.json())
}

export default gateCryptoRate;