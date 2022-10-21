import {Component} from 'react'
import './index.css'

class CryptocurrencyItem extends Component {
  render() {
    const {item} = this.props
    const {currencyName, currencyLogo, euroValue, usdValue} = item
    return (
      <li className="list-card">
        <div className="list-coin-container">
          <img src={currencyLogo} className="icon" alt={currencyName} />
          <div className="currency-text">
            <p className="icon-text">{currencyName}</p>
          </div>
        </div>
        <div className="list-currency-container">
          <p className="list-text">{euroValue}</p>
          <p className="list-text">{usdValue}</p>
        </div>
      </li>
    )
  }
}

export default CryptocurrencyItem
