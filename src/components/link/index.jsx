import React from 'react';
import PropTypes from 'prop-types';
import { formatURL } from '../../utils';

const Link = ({ href, children }) => {
	const externalUrl = /(http(s?)):\/\//i.test(href);

	return (
		externalUrl ? (
			<a href={formatURL(href)} target="_blank" rel="noopener noreferrer" className="c-link">
				{`${children}`}
				<span className="visually-hidden">(Opens in new window)</span>
			</a>
		) : <a href={formatURL(href)} className="c-link">{`${children}`}</a>
	);
};

Link.propTypes = {
	href: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
};

export default Link;
