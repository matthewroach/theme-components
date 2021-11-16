---
inject: true
to: _index.scss
after: "// Output each components CSS"
---
@import './components/<%= name %>';
