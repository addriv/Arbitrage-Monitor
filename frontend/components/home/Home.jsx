import React from 'react';
import Nav from '../nav/nav_container';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <Nav />
        <div>This is the HOME component</div>
      </div>
    );
  }
}