import React from 'react';
import PropTypes from 'prop-types';

const GridItem = ({
	children, alignment, desktop, tablet, mobile,
}) => (
	<div
		className="l-grid-item"
		alignment={alignment}
		style={{
			'--grid-column-start--desktop': desktop,
			'--grid-column-start--tablet': tablet || desktop,
			'--grid-column-start--default': mobile || tablet || desktop,
		}}
	>
		{children}
	</div>
);

GridItem.defaultProps = {
	desktop: '',
	alignment: 'start',
	tablet: '',
	mobile: '',
};

GridItem.propTypes = {
	children: PropTypes.any.isRequired,
	alignment: PropTypes.oneOf(['start', 'center', 'end']),
	desktop: PropTypes.string,
	tablet: PropTypes.string,
	mobile: PropTypes.string,
};

export default GridItem;
