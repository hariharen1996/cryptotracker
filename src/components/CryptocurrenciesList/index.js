import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem/index'
import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {data} = this.props
    return (
      <>
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="img"
        />
        <div className="card-container">
          <div className="card">
            <div className="coin-container">
              <p className="coin-type">Coin Type</p>
            </div>
            <div className="currency-container">
              <p className="text">USD</p>
              <p className="text">EURO</p>
            </div>
          </div>
          <ul className="list-container">
            {data.map(item => (
              <CryptocurrencyItem item={item} key={item.id} />
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default CryptocurrenciesList
