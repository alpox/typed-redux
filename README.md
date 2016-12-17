# Typed Redux

[Redux](http://redux.js.org/) with typed actions.

[![npm version](https://img.shields.io/npm/v/typed-redux.svg?style=flat-square)](https://www.npmjs.com/package/typed-redux)

## Why?
- Action type namespacing (Redux issue [#786](https://github.com/reactjs/redux/issues/786))
- Get rid of [action types string constants](https://github.com/reactjs/redux/blob/master/examples/todomvc/src/constants/ActionTypes.js)
- Get rid of reserved `type` properties of actions
- TypeScript support for actions (Redux issue [#992](https://github.com/reactjs/redux/issues/992) [#355](https://github.com/reactjs/redux/issues/355))

## Installation
```
npm install --save typed-redux
```

## Usage
See [examples](https://github.com/jas-chen/typed-redux/tree/master/examples) for usage.

## APIs
APIs are the same as original [Redux](http://redux.js.org/), excepting that:
- You can dispatch class instances actions
- Actions don't have to have a `type` property

## FAQ
#### Do I need to use TypeScript to use Typed Redux?
No. And you can still get benefits from typed actions.

#### Is typed Action serializable?
[Yes](https://github.com/jas-chen/typed-redux/tree/master/examples/serialize-action).

## Versioning
Typed Redux will follow the version of Redux, but it may have it's own beta or rc versions.
