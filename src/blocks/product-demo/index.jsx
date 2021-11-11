import React from 'react';
import PropTypes from 'prop-types';

import {
	Grid, GridItem, Heading, Image, Paragraph, Overline, Stack, Link, HeadingSection,
} from '../../index';

// TODO - Make image grid and content independent blocks
const ProductDemo = ({}) => (
	<Grid className="b-product">
		<GridItem columns="span 6">
			<Stack>
				<Stack direction="horizontal">
					<Image src="https://visionbegin.github.io/brands-ecom-landing-page/static/media/BestSeller2@2X.cf3bb2ec.jpg" alt="" aspectRatio="4 / 3" />
					<Image src="https://visionbegin.github.io/brands-ecom-landing-page/static/media/BestSeller2@2X.cf3bb2ec.jpg" alt="" aspectRatio="4 / 3" />
				</Stack>
				<Stack direction="horizontal">
					<Image src="https://visionbegin.github.io/brands-ecom-landing-page/static/media/BestSeller2@2X.cf3bb2ec.jpg" alt="" aspectRatio="4 / 3" />
					<Image src="https://visionbegin.github.io/brands-ecom-landing-page/static/media/BestSeller2@2X.cf3bb2ec.jpg" alt="" aspectRatio="4 / 3" />
				</Stack>
				<Stack direction="horizontal">
					<Image src="https://visionbegin.github.io/brands-ecom-landing-page/static/media/BestSeller2@2X.cf3bb2ec.jpg" alt="" aspectRatio="4 / 3" />
					<Image src="https://visionbegin.github.io/brands-ecom-landing-page/static/media/BestSeller2@2X.cf3bb2ec.jpg" alt="" aspectRatio="4 / 3" />
				</Stack>
			</Stack>
		</GridItem>
		<GridItem columns="span 6">
			<Stack>
				<Overline text="Home / Woman / The Dream Pant" />
				<Heading>The Dream Pant</Heading>
				<Paragraph text="Tailored look. Sweatpant feel. Made of soft double-knit fabric, the Dream Pant features an elastic waist, pintuck detailing, and a sleek tapered leg. Plus, it has a flat finish, so it looks polished, but it’s comfortable enough to nap in. The best part? It’s wrinkle resistant. From morning meetings to afternoon errands to late-night lounging—this pant looks (and feels) like a dream." />
			</Stack>
		</GridItem>
	</Grid>
);

ProductDemo.defaultProps = {};

ProductDemo.propTypes = {};

export default ProductDemo;
