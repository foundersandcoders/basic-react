import React from 'react';

class Title extends React.Component {
  render () {
  	const text = this.props.text;
    return (
      <h1>Franz {text} World</h1>
    );
  }
}

Title.propTypes = {
	text: React.PropTypes.string.isRequired,
	subtitle: React.PropTypes.string
};

export default Title;