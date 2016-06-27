css-modificator organizes your CSS-styles, ordering properties alphabetically.

Usage: node css-modificator.js CSS_file

Old ordering.
.search{
  position: relative;
  border: 1px solid;
  padding-left: 15px;
  width: 230px;
  height: 28px;
  right: 1px;
  top: 1px;
  border-radius: 14px;
}

New ordering.
.search {
  border: 1px solid;
  border-radius: 14px;
  height: 28px;
  padding-left: 15px;
  position: relative;
  right: 1px;
  top: 1px;
  width: 230px;
}

