---
to: src/components/<%= name %>/index.test.jsx
---
import React from 'react';
import renderer from 'react-test-renderer';
import <%= Name %> from '.';

describe('<%= Name %>', () => {
	it('should render', () => {
		const tree = renderer.create(<<%= Name %>>Component Children</<%= Name %>>).toJSON();

		expect(tree).toMatchInlineSnapshot();
	});
});
