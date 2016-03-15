import React from 'react';
import Title from './title.js';
import Button from './button.js';
import List from './list.js';

class Home extends React.Component {

	constructor () {
		super();
		this.state = {
			clicked: false
		};
		this.toggleColour = this.toggleColour.bind(this);
	}
	// setState also triggers render(). Therefore never call setState inside render.
	toggleColour () {
		this.setState({
			clicked: !this.state.clicked
		});
	}

	render() {
		return (
		<div>
			<Title text="Hello" />
			<List />
			<Button clicked={this.state.clicked} toggleColour={this.toggleColour}/>
		</div>
		);
	}
}

export default Home;