import React from 'react';
import PropTypes from 'prop-types';

import Link from '../link';

const Overline = ({ children, href }) => (
	<div className="c-overline">
		{href ? <Link href={href}>{children}</Link> : children}
	</div>
);

Overline.propTypes = {
	children: PropTypes.string.isRequired,
	href: PropTypes.string,
};

export default Overline;
