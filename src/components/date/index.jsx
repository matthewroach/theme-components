import React from 'react';
import PropTypes from 'prop-types';

const Date = ({ children, dateTime }) => <time className="c-date" dateTime={dateTime}>{children}</time>;

Date.propTypes = {
	children: PropTypes.string.isRequired,
	dateTime: PropTypes.string.isRequired,
};

export default Date;
