import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, type, size }) => (
	<button className={`c-button c-button--${size}`} type={type}>
		{children}
	</button>
);

Button.defaultProps = {
	type: 'button',
	size: 'medium',
};

Button.propTypes = {
	children: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
	size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Button;
