---
to: src/components/<%= name %>/index.jsx
---
import React from 'react';
import PropTypes from 'prop-types';

const <%= Name %> = ({ children }) => (
	<div className="c-<%= name %>">{children}</div>
);

<%= Name %>.propTypes = {
	children: PropTypes.string.isRequired,
};

export default <%= Name %>;
