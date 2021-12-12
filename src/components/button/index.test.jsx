import React from 'react';
import renderer from 'react-test-renderer';
import Button from '.';

describe('Button', () => {
	it('should render', () => {
		const tree = renderer.create(<Button>Component Children</Button>).toJSON();

		expect(tree).toMatchInlineSnapshot(`
      <button
        className="c-button c-button--medium"
        type="button"
      >
        Component Children
      </button>
    `);
	});
});
