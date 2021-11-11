import React from 'react';
import PropTypes from 'prop-types';

const Caption = ({ text }) => (
	<p className="c-caption">{text}</p>
);

Caption.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Caption;
