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
    // const BTCPairs = this.props.BTCPairs;
    // BTCPairs.forEach((symbol) => {
    //   const pair = symbol.split('-');
    //   const baseCoin = pair[0];
    //   const quoteCoin = pair[1];
    //   this.props.fetchKucoinRatio(baseCoin, quoteCoin, 'sell');
    // });
    this.props.fetchKucoinRatio('NEO', 'BTC', 'sell');
  }

  BTCPairsDisplay() {
    return this.props.BTCPairs.map((pair, i) => {
      const ratio = this.props.intraKucoin[pair];
      return (
        <div key={i} className="kucoin-btc-pair">
          <div className="symbol" id={pair}>{pair}</div>
          <div className="ratio" id={pair}>{ratio}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="intra-kucoin">
        <div>This is the KUCOIN component</div>
        { this.BTCPairsDisplay() }
      </div>
    );
  }
}