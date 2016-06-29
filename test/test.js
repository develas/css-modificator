const assert = require('assert');
const cssModificator = require('../css-modificator').parseCSS;
const fs = require('fs');

describe('CSS-modificator:', function() {
  const initValue = '.search{ position: relative; border: 1px solid; }';
  const resultValue = '.search {  border: 1px solid;  position: relative;}';
  const result = cssModificator(initValue);  


  describe('css file', function() {
    it('should be ' + resultValue, function() {
      assert.equal(resultValue, result.replace(/(\r\n|\n|\r)/gm,""));
    });
  });
});