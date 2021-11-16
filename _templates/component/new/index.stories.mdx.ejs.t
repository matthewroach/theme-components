---
to: src/components/<%= name %>/index.stories.mdx
---
import { Meta, Story, Preview, Props } from '@storybook/addon-docs';

import <%= Name %> from './';

<Meta title="Components/<%= Name %>" component={<%= Name %>} />

# <%= Name %>

<Props of={<%= Name %>} />


## Usage

<%= Name %>.........

## Stories

** Default **
<Preview>
	<Story name="Default">
		<<%= Name %>><%= Name %> Text</<%= Name %>>
	</Story>
</Preview>
