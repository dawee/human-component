# human-component

A human readable version of React Components

## Render tree

```js
const Human = require('human-component');

/* Create from node name */
const div = Human.from('div');
const span = Human.from('span');

/* Require directly a React.Component type */
const Paper = Human.require(module, 'material-ui/Paper');


/* Inherit from Human.Component */
class Top extends Human.Component {
  render() {
    return (
      Paper.el(
        h1.el('Contacts'),
        ul.el(
          li.el(
            h2.el('James Nelson'),
            a.set({href: 'mailto:james@jamesknelson.com'}).el('james@jamesknelson.com'),
          ),
          li.el(
            h2.el('Joe Citizen'),
            a.set({href: 'mailto:joe@example.com'}).el('joe@example.com'),
          )
        )
      )
    );
  }
};
```
