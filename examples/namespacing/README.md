# Namespacing Example

In this example, Checkbox and Input are stateful components that use
Typed Redux to control their logic. Notice they both handle `Change` Action
without conflict.

Also there is a component called Greet, it shares state with Input.
(In vanilla React app, sharing state between stateful components is hard.)

#### Install
```
npm install
```

> Note: You'll see the warning `Unmet peer dependency "redux@^2.0.0 || ^3.0.0"`. That is because react-redux uses Redux's `bindActionCreators` function, a workaround is to use Webpack's module resolve config to resolve redux to typed-redux.

#### Run
```
npm start
open http://localhost:8080/
```
