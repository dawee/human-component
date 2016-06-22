```js
Paper.width(100)
  .h1.text('Contacts').inline()
  .ul
    .li
      .h2.text('James Nelson').inline()
      .a.href('mailto:james@jamesknelson.com').text('james@jamesknelson.com').inline()
      .close()
    .li
      .h2.text('Joe Citizen').inline()
      .a.href('mailto:joe@example.com').text('joe@example.com').inline()
      .closeAll()
```
