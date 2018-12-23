# Lib-starter

Lib-starter can be used to quickly create a [React Components](https://reactjs.org/docs/components-and-props.html) library, written in [TypeScript](https://github.com/Microsoft/TypeScript), using [Lerna](https://github.com/lerna/lerna) for repository management and showcasing itself with a [Storybook](https://github.com/storybooks/storybook).

## Installation

- Clone this repository.
- Create your own one.
- `cd lib-starter`, [change the remote URL](https://help.github.com/articles/changing-a-remote-s-url/) to match the repository you just created.
- Replace "components" and "storybook" by the names that you wish to give your npm modules in: - `packages/components/package.json` - `packages/storybook/package.json` - `packages/storybook/stories/index.stories.js`
- Start coding!

## Start

`yarn start` and connect to [http://localhost:3000](http://localhost:3000). What you see is your storybook. Use it to develop your components and to show others how to use them.

## Build

`yarn build` will get you:

- the compiled, publishable components, under `packages/components/lib`.
- the static, deployable storybook build, under `packages/storybook/build`.

## Publish

- `lerna version 0.0.2`
- `lerna publish`
