import React from 'react';
import './Die.styles.scss';
import Die from './Die';

class RollDice extends React.Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five']
  };

  state = {die1: 'one', die2: 'two', rolling: false}

  rollDie = (e) => {
    const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

    this.setState({ die1: newDie1})
    this.setState({ die2: newDie2})
    this.setState({ rolling: true})

    setTimeout(() => {
      this.setState({rolling: false})
    }, 1000)
  }


  render() {
    return(
      <>
        <h1>Welcome to Dice Roll</h1>
      <div className='dice-wrapper'>
       <Die face={this.state.die1} rolling={this.state.rolling} />
       <Die face={this.state.die2}  rolling={this.state.rolling}/>
      </div>
      <div className='btn-cont'>
        <button
        disabled={this.state.rolling}
        onClick={this.rollDie}
        className='btn' >
          {this.state.rolling ? "Rolling..." : "Roll Dice"}
          </button>
      </div>
      </>
    )
  }
}

export default RollDice;