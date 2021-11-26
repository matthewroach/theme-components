import primary from '!!style-loader?injectType=lazyStyleTag!css-loader!sass-loader!./theme.scss'
import alternative from '!!style-loader?injectType=lazyStyleTag!css-loader!sass-loader!./theme-alt.scss'

import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme'

export const decorators = [
  cssVariablesTheme,
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  cssVariables: {
    files: {
      primary,
      alternative,
    },
  },
};