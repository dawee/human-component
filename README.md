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
const React = require('react');
const Component = require('human-component');

const div = Component.from('div');
const span = Component.from('span');

class Top extends React.Component {
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
