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

  getBTCRatios() {
    const BTCPairs = this.props.BTCPairs;
    BTCPairs.forEach((symbol) => {
      const pair = symbol.split('-');
      const baseCoin = pair[0];
      const quoteCoin = pair[1];
      this.props.fetchKucoinRatio(baseCoin, quoteCoin, 'buy');
    });
  }

  getVehicleRatios() {
    const vehiclesData = this.props.intraKucoin.vehicles;
    const vehicleCoins = Object.keys(vehiclesData);
    vehicleCoins.forEach((vehicleCoin) => {
      const tradingPairs = vehiclesData[vehicleCoins];
      tradingPairs.forEach((quoteCoin) => {
        const ratioType = quoteCoin === 'BTC' ? 'sell' : 'buy';
        this.props.fetchKucoinRatio(vehicleCoin, quoteCoin, ratioType);
      });
    });
  }

  componentDidMount() {
    this.getBTCRatios();
    this.getVehicleRatios();
    // setInterval(() => {
    //   this.getBTCRatios();
    //   this.getVehicleRatios();
    // }, 1000);
  }

  headerDisplay() {
    const headerPairs = ['ETH-BTC', 'NEO-BTC', 'KCS-BTC', 'BCH-BTC'];
    const BTCPairs = this.props.intraKucoin.ratios.BTCPairs;
    return headerPairs.map((pair, i) => {
      const ratio = BTCPairs[pair];
      const pairCoins = pair.split('-');
      const baseCoin = pairCoins[0];
      const quoteCoin = pairCoins[1];
      return (
        <div key={i} className="header-label">
          <div className="symbol" id={pair}>
            <div className="base-coin">{baseCoin}</div>
            <div className="quote-coin">/ {quoteCoin}</div>
          </div>
          <div className="ratio" id={pair}>{ratio}</div>
        </div>
      );
    });
  }

  rowDisplay() {
    const vehiclesData = this.props.intraKucoin.vehicles;
    const vehicleCoins = Object.keys(vehiclesData);
    return vehicleCoins.map((vehicleCoin, i) => {
      const tradingPairs = ['BTC', 'ETH', 'NEO', 'KCS', 'BCH'];
      const rowInfo = tradingPairs.map((pair, j) => {
        let ratio;
        const pairRatios = this.props.intraKucoin.ratios[`${pair}Pairs`];
        if (pairRatios) {
          ratio = pairRatios[`${vehicleCoin}-${pair}`];
        }
        return (
          <div className="row-info">
            <div className={pair}>{vehicleCoin}/{pair}</div>
            <div className="ratio">{ratio}</div>
          </div>
        );
      });

      return (
        <div className="row">
          { rowInfo }
        </div>
      );
    });
  }

  render() {
    return (
      <div className="intra-kucoin">
        <div className="header">
          <div className="header-label">Assets</div>
          { this.headerDisplay() }
        </div>
        <div className="rows">
          { this.rowDisplay() }
        </div>
      </div>
    );
  }
}