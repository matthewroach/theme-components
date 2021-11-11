import React from 'react';
import PropTypes from 'prop-types';

import Link from '../link';

const Overline = ({ text, href }) => <div className="c-overline">{href ? <Link href={href} text={text} /> : text}</div>;

Overline.propTypes = {
	text: PropTypes.string.isRequired,
	href: PropTypes.string,
};

export default Overline;
