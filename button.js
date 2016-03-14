import React from 'react';
require('./styles.css');

class Button extends React.Component {

	
	render () {
		return (
			<button className={this.props.clicked ? "blue-button" : "white-button"}
			onClick={this.props.toggleColour}>Click me</button>
		)
	}
}

Button.propTypes = {
	clicked: React.PropTypes.bool,
	toggleColour: React.PropTypes.func
}

export default Button;