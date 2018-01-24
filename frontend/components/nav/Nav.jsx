import React from 'react';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handleExchange = this.handleExchange.bind(this);
  }

  handleExchange(event) {
    const exchange = event.target.id;
  }

  render() {
    return (
      <div className="nav">
        <div className="title">Crypto Arbitrage</div>
        <button id="kucoin" onClick={this.handleExchange}>Kucoin</button>
      </div>
    );
  }
}