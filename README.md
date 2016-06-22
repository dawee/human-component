# human-component

A human readable version of React Components

## Render inline

```js
const React = require('react');
const Component = require('human-component');

const span = Component.from('span');

class Top extends React.Component {
  render() {
    return span.props({className: 'icon-stuff'}).inline;
  }
};
```

## Render tree

```js
const Human = require('human-component');

const div = Human.from('div');
const span = Human.from('span');

class Top extends Human.Component {
  render() {
    return (
      div.props({style: {textAlign: 'center'}}).tree(
        span.props({className: 'icon-stuff'}).inline,
        span.props({className: 'icon-otherstuff'}).inline,
      );
    );
  }
};
```
