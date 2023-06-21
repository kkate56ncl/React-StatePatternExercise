import React, { Component } from 'react';
import LotteryBall from './LotteryBall';
import './Lottery.css';

class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxValue: 40,
  };

  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.numBalls }) };
    this.newLotto = this.newLotto.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  //My solution
  newLotto() {
    const arr = [];
    for (let i = 1; i <= this.props.numBalls; i++) {
      arr.push(Math.floor(Math.random() * this.props.maxValue) + 1);
    }
    this.setState(() => {
      return { nums: arr };
    });
  }

  generate() {
    this.setState((curState) => {
      return {
        nums: curState.nums.map((n) => Math.floor(Math.random() * this.props.maxValue) + 1),
      };
    });
  }

  handleClick() {
    this.generate();
  }

  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map((el) => (
            <LotteryBall num={el} />
          ))}
        </div>
        <button className="Lottery-btn" onClick={this.handleClick}>
          Generate
        </button>
      </section>
    );
  }
}

export default Lottery;
