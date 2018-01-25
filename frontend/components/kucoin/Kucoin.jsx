import React from 'react';

export default class Kucoin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DBC: 0
    };
  }

  componentDidMount() {
    const BTCPairs = Object.keys(this.props.intraKucoin.BTCPairs);
  }

  render() {
    return (
      <div>This is the KUCOIN component</div>
    );
  }
}