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
      const tradingPairs = vehiclesData[vehicleCoin];
      tradingPairs.forEach((quoteCoin) => {
        const ratioType = quoteCoin === 'BTC' ? 'sell' : 'buy';
        this.props.fetchKucoinRatio(vehicleCoin, quoteCoin, ratioType);
      });
    });
  }

  componentDidMount() {
    // this.getBTCRatios();
    // this.getVehicleRatios();
    setInterval(() => {
      this.getBTCRatios();
      this.getVehicleRatios();
    }, 1000);
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
        let ratio, arbitrage;
        const pairRatios = this.props.intraKucoin.ratios[`${pair}Pairs`];
        if (pairRatios) {
          ratio = pairRatios[`${vehicleCoin}-${pair}`];
          arbitrage = `${this.calculateArbitrage(vehicleCoin, pair)}%`;
        }

        if (pair === 'BTC') {
          return (
            <div key={j} className="row-header">
              <div className="symbol">
                <div className="base-coin">{vehicleCoin}</div>
                <div className="quote-coin">/ BTC</div>
              </div>
              <div className="ratio">{ratio}</div>
            </div>
          );
        }
        else {
          return (
            <div key={j} className="row-data">
              <div className="ratio">{ratio}</div>
              <div className="arbitrage-value">{arbitrage}</div>
            </div>
          );
        }
      });

      return (
        <div key={i} className="row">
          { rowInfo }
        </div>
      );
    });
  }

  calculateArbitrage(vehicleCoin, outputCoin) {
    // Constants
    const ratiosData = this.props.intraKucoin.ratios;
    const BTCratio = ratiosData.BTCPairs[`${vehicleCoin}-BTC`];
    const outputRatio = ratiosData[`${outputCoin}Pairs`][`${vehicleCoin}-${outputCoin}`];
    const outputBTCRatio = ratiosData.BTCPairs[`${outputCoin}-BTC`];
    const netAfterFeeFactor = 1 -  (0.1 / 100);

    // Calculations
    const vehicleVolume = 1 / BTCratio * netAfterFeeFactor;
    const outputVolume = vehicleVolume * outputRatio * netAfterFeeFactor;
    const newInputVolume = outputVolume * outputBTCRatio * netAfterFeeFactor;
    const netChange = newInputVolume - 1;
    const netPctChange = (netChange / 1 * 100).toFixed(2);
    const tradeStatus = newInputVolume > 1 ? 'PROFIT' : 'LOSS';

    return netPctChange;
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