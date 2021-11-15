import React from 'react';
import PropTypes from 'prop-types';

const Caption = ({ children }) => (
	<p className="c-caption">{children}</p>
);

Caption.propTypes = {
	children: PropTypes.string.isRequired,
};

export default Caption;
