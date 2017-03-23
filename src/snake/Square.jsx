import React from 'react';

export default class Square extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			switchedOnAt: props.isHead ? props.currentTick : Infinity
		};
	}


	componentWillReceiveProps(newProps) {
		if (!this.props.isHead && newProps.isHead) {
			this.setState({
				switchedOnAt: newProps.currentTick,
				overlap: this.isSnake()
			})
		}
		if (newProps.currentTick === 0) {
			this.setState({
				switchedOnAt: Infinity
			})
		}
	}

	isSnake() {
		let {snakeLength, currentTick} = this.props;
		let {switchedOnAt} = this.state;

		return switchedOnAt <= currentTick && currentTick - switchedOnAt < snakeLength;
	}

	render() {
		let style = {
			left: this.props.x * 50,
			top: this.props.y * 50
		};

		if(this.isSnake()){
			style.backgroundColor = "pink"
		}

		if(this.state.overlap && this.isSnake()){
			style.backgroundColor = "red"
		}

		return (
			<div className="square" style={style}>

			</div>
		)
	}
}
