import React, { Component } from 'react';
import './Die.styles.scss';

class Die extends Component {
  render() {
    const cls = `Die fas fa-dice-${this.props.face} ${ this.props.rolling ? 'shaking' : '' }`
    return(
      <>
        <i className={cls}></i>
      </>
    )
  };
}

export default Die;