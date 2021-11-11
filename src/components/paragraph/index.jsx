import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ text }) => (
	<p className="c-paragraph">{text}</p>
);

Paragraph.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Paragraph;
