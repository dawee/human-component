# human-component

A human readable version of React Components

## Convert tag names

```js
const Human = require('human-component');

const div = Human.from('div');
const span = Human.from('span');
```
## Require React.Component

```js
const Human = require('human-component');

const Paper = Human.from('material-ui/Paper');
const TableRow = Human.require(module, 'material-ui/Table', 'TableRow');
```

## Render tree

```js
class MyComponent extends React.Component {
  
  render() {
    return (
      Paper.el({width: 100},
        div.el(null,
          span.el(null, 'Lorem'),
          span.el(null, 'Ipsum')
        ),
      )
    );
  }
}
```
