import React from "react";
import Board from "./board";

export default class Game extends React.Component {
  validateInput = (input, dimension) => {
    let output;
    output = parseInt(input);
    if (Number.isNaN(output)) {
      return {
        valid: false,
        msg: `${input} not valid. 
        Please enter a valid integer for ${dimension}`
      };
    } else if (output < 0) {
      return {
        valid: false,
        msg: `${input} not valid. 
          Please enter a positive integer for ${dimension}`
      };
    } else {
      return {
        valid: true,
        output
      };
    }

  }
  render() {
    let width = this.validateInput(
      prompt("Please enter board width"),
      'width'
    );
    while (!width.valid) {
      width = this.validateInput(prompt(width.msg), 'width');
    }

    let height = this.validateInput(
      prompt("Please enter board height"),
      'height'
    );
    while (!height.valid) {
      height = this.validateInput(prompt(height.msg), 'height');
    }

    if (width.output < height.output) {
      let container = width.output;
      width.output = height.output;
      height.output = container;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board width={width.output} height={height.output} />
        </div>
      </div>
    );
  }
}
