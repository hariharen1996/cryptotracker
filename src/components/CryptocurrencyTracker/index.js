import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrenciesList from '../CryptocurrenciesList/index'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true, data: []}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(item => ({
      id: item.id,
      currencyName: item.currency_name,
      currencyLogo: item.currency_logo,
      euroValue: item.euro_value,
      usdValue: item.usd_value,
    }))
    this.setState({data: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, data} = this.state
    return (
      <div className="bg-container">
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList data={data} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
