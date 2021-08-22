import React from 'react';
import PropTypes from 'prop-types';

export default function Card(props) {
	const styles = {
		backgroundColor: props.cardColor,
		height: props.height,
		width: props.width,
	};
	return <div style={styles}></div>;
}

Card.propTypes = {
	cardColor: PropTypes.oneOf(['red', 'blue']).isRequired,
	height: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
};

Card.defaultProps = {
	height: 100,
	width: 100,
};
