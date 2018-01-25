import React from 'react';

export default class Kucoin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'ETH-BTC': null,
      'NEO-BTC': null,
      'KCS-BTC': null,
      'BCH-BTC': null
    };
  }

  componentDidMount() {
    const BTCPairs = this.props.BTCPairs;
    BTCPairs.forEach((symbol) => {
      const pair = symbol.split('-');
      const baseCoin = pair[0];
      const quoteCoin = pair[1];
      this.props.fetchKucoinRatio(baseCoin, quoteCoin, 'sell');
    });
  }

  BTCPairsDisplay() {
    const BTCPairs = this.props.intraKucoin.BTCPairs;
    return this.props.BTCPairs.map((pair, i) => {
      const ratio = BTCPairs[pair];
      const pairCoins = pair.split('-');
      const baseCoin = pairCoins[0];
      const quoteCoin = pairCoins[1];
      return (
        <div key={i} className="btc-pair">
          <div className="symbol" id={pair}>
            <div className="base-coin">{baseCoin}</div>
            <div className="quote-coin">- {quoteCoin}</div>
          </div>
          <div className="ratio" id={pair}>{ratio}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="intra-kucoin">
        <div className="headers">
          { this.BTCPairsDisplay() }
        </div>
      </div>
    );
  }
}