# Theme Components

## Getting Started

* Install dependencies `npm i`
* Run storybook `npm run storybook`


## Creating a new component

In order to create a new component with all the relevant files there is a generator that
takes the hassle away from yourself.

```
npm run component:new -- {componentName}
```

To create a new component: `button` run the following command

```
npm run component:new -- button
```

The folder structure and base files to get you going are then created in `src/components/button/`


## npmrc


```
@matthewroach:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=
```