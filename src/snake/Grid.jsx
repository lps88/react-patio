import React from 'react';
import Square from './Square';

export default class Grid extends React.Component {


	constructor(props) {
		super(props);

		this.state = this.getInitialState();
		this.onKeyDown = this.onKeyDown.bind(this);
		this.onReset = this.onReset.bind(this);
		this.onStart = this.onStart.bind(this);
		this.moveSnake = this.moveSnake.bind(this);
	}

	getInitialState() {
		return {
			currentDirection: 39, //right
			snakeHeadX: 0,
			snakeHeadY: 0,
			snakeLength: 3,
			currentTick: 0
		};
	}

	onKeyDown(e) {
		var newDirection = e.keyCode;
		if (Math.abs(this.state.currentDirection - newDirection) !== 2 && newDirection > 36 && newDirection < 41) {
			this.setState({currentDirection: newDirection})
		}
	}

	onReset() {
		this.setState(this.getInitialState());
		clearInterval(this.interval);
	}

	onStart() {
		this.onReset();
		this.interval = setInterval(this.moveSnake, 300);
	}

	moveSnake() {
		let state;

		if (this.state.currentDirection === 37) { //left
			state = {snakeHeadX: this.state.snakeHeadX - 1}
		} else if (this.state.currentDirection === 38) { //up
			state = {snakeHeadY: this.state.snakeHeadY - 1}
		} else if (this.state.currentDirection === 39) { //right
			state = {snakeHeadX: this.state.snakeHeadX + 1}
		} else if (this.state.currentDirection === 40) { //down
			state = {snakeHeadY: this.state.snakeHeadY + 1}
		}
		state.currentTick = this.state.currentTick + 1;
		state.snakeLength = Math.max(this.state.currentTick / 10, 3);
		this.setState(state);

	}

	render() {

		let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		return (
			<div>
				<button onClick={this.onReset}>Reset</button>
				<button onClick={this.onStart} tabIndex="0" onKeyDown={this.onKeyDown}>Start</button>
				<div className="grid">
					{numbers.map(i => (
						numbers.map(j => (
							<Square x={i} y={j}
											currentTick={this.state.currentTick}
											snakeLength={this.state.snakeLength}
											isHead={i === this.state.snakeHeadX && j === this.state.snakeHeadY}
							/>
						))
					))}
				</div>
			</div>
		)
	}
}
