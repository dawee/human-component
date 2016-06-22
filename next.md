```js
Paper.width(100)
  .h1.text('Contacts')._
  .ul
    .li
      .h2.text('James Nelson')._
      .a.href('mailto:james@jamesknelson.com').text('james@jamesknelson.com')._
    ._
    .li
      .h2.text('Joe Citizen')._
      .a.href('mailto:joe@example.com').text('joe@example.com')._
  .createElement()
```