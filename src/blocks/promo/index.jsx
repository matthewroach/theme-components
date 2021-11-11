import React from 'react';
import PropTypes from 'prop-types';

import {
	Grid, GridItem, Heading, Image, Paragraph, Overline, Stack, Link, HeadingSection,
} from '../../index';

const FakeStory = {
	_id: 'DLFEXGWKDFF5PI2PCYT2G7VUZI',
	description: {
		basic: 'One of the highest paved roads in Europe, this mountain pass makes for a thrilling road trip into the misty mountains above the Adriatic and Ionian seas.',
	},
	display_date: '2020-01-14T18:57:08.388Z',
	headlines: {
		basic: 'In Albania, age-old traditions and Mediterranean beaches on the cheap ',
	},
	label: {
		basic: {
			display: true,
			text: 'Exclusive',
		},
	},
	promo_items: {
		basic: {
			type: 'image',
			url: 'https://placekitten.com/1280/720',
		},
	},
	type: 'story',
	websites: {
		'the-gazette': {
			website_url: '/local/2020/01/14/in-albania-age-old-traditions-and-mediterranean-beaches-on-the-cheap/',
		},
	},
};

const Promo = ({ showHeadline }) => (
	<HeadingSection>
		<Grid className="b-promo">
			<GridItem columns="span 6">
				<Image src={FakeStory.promo_items.basic.url} alt="" aspectRatio="4 / 3" />
			</GridItem>
			<GridItem columns="span 6">
				<Stack>
					<Overline text={FakeStory.label.basic.text} />
					{showHeadline ? (
						<Heading>
							<Link
								href={FakeStory.websites['the-gazette'].website_url}
								text={FakeStory.headlines.basic}
							/>
						</Heading>
					) : null}
					<Paragraph text={FakeStory.description.basic} />
				</Stack>
			</GridItem>
		</Grid>
	</HeadingSection>
);

Promo.defaultProps = {
	showHeadline: true,
};

Promo.propTypes = {
	showHeadline: PropTypes.bool,
};

export default Promo;
