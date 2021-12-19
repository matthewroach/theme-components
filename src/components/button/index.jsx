import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
	children, type, size, fullWidth,
}) => {
	const classNames = ['c-button', `c-button--${size}`];

	if (fullWidth) {
		classNames.push('c-button--full');
	}

	return (
		<button className={classNames.join(' ')} type={type}>
			{children}
		</button>
	);
};

Button.defaultProps = {
	type: 'button',
	size: 'medium',
	fullWidth: false,
};

Button.propTypes = {
	children: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	fullWidth: PropTypes.bool,
};

export default Button;
