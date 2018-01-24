import React from 'react';
import { Link } from 'react-router-dom';

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
        <div className="title">CRYPTO ARBITRAGE</div>
        <Link to="/kucoin" className="kucoin-link">Kucoin</Link>
      </div>
    );
  }
}