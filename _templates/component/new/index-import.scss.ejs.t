---
inject: true
to: src/_index.scss
after: "// Output each components CSS"
---
@import './components/<%= name %>';
