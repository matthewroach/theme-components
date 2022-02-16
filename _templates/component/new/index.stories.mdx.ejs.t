---
to: src/components/<%= name %>/index.stories.mdx
---
import { Meta, Story, Preview, Props } from '@storybook/addon-docs';

import <%= Name %> from './';

<Meta title="Components/<%= Name %>" component={<%= Name %>} />

# <%= Name %>

Short description about the component

## Usage

```jsx

import { <%= Name %> } from '@matthewroach/theme-components';

const BlockFeature = () => (
  <<%= Name %>><%= Name %> Text</<%= Name %>>
)

```

## Props

<Props of={<%= Name %>} />


## Stories

** Default **
<Preview>
	<Story name="Default">
		<<%= Name %>><%= Name %> Text</<%= Name %>>
	</Story>
</Preview>
