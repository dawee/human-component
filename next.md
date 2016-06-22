```js
Paper.width(100)
  .h1.text('Contacts').inline
  .ul
    .li
      .h2.text('James Nelson')
      .a.href('mailto:james@jamesknelson.com').text('james@jamesknelson.com').inline
    ._li
    .li
      .h2.text('Joe Citizen')
      .a.href('mailto:joe@example.com').text('joe@example.com').inline
    ._li
  ._ul
._Paper
```