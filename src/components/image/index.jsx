import React from 'react';
import PropTypes from 'prop-types';

const Image = ({
	src, alt, aspectRatio, loading,
}) => (
	<img
		src={src}
		alt={alt}
		loading={loading}
		className="c-image"
		style={{ aspectRatio }}
	/>
);

Image.defaultProps = {
	loading: 'lazy',
};

Image.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	aspectRatio: PropTypes.string,
	loading: PropTypes.oneOf(['lazy', 'eager']),
};

export default Image;
