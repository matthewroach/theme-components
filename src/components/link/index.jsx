import React from 'react';
import PropTypes from 'prop-types';
import { formatURL } from '../../utils';

const Link = ({ href, text }) => {
	const externalUrl = /(http(s?)):\/\//i.test(href);

	return (
		externalUrl ? (
			<a href={formatURL(href)} target="_blank" rel="noopener noreferrer" className="c-link">
				{`${text}`}
				<span className="visually-hidden">(Opens in new window)</span>
			</a>
		) : <a href={formatURL(href)} className="c-link">{`${text}`}</a>
	);
};

Link.propTypes = {
	href: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default Link;
