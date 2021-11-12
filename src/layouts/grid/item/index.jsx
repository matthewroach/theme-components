import React from 'react';
import PropTypes from 'prop-types';

const GridItem = ({
	children, desktop, tablet, mobile,
}) => (
	<div
		className="l-grid-item"
		style={{
			'--grid-column-start--desktop': desktop,
			'--grid-column-start--tablet': tablet || desktop,
			'--grid-column-start--mobile': mobile || tablet || desktop,
		}}
	>
		{children}
	</div>
);

GridItem.defaultProps = {
	desktop: '',
	tablet: '',
	mobile: '',
};

GridItem.propTypes = {
	children: PropTypes.any.isRequired,
	desktop: PropTypes.string,
	tablet: PropTypes.string,
	mobile: PropTypes.string,
};

export default GridItem;
