import React from 'react';
import PropTypes from 'prop-types';

const Date = ({ date, dateTime }) => <time className="c-date" dateTime={dateTime}>{date}</time>;

Date.propTypes = {
	date: PropTypes.string.isRequired,
	dateTime: PropTypes.string.isRequired,
};

export default Date;
