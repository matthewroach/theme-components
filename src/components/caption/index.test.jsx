import React from 'react';
import renderer from 'react-test-renderer';
import Caption from '.';

describe('Caption', () => {
	it('should render', () => {
		const tree = renderer.create(<Caption>Caption Text</Caption>).toJSON();

		expect(tree).toMatchInlineSnapshot(`
      <p
        className="c-caption"
      >
        Caption Text
      </p>
    `);
	});
});
