const fs = require('fs');
const css = require('css');

function readCSSfile(fileName){
  const readableStream  = new fs.ReadStream(fileName);

  var data = '';

  readableStream 
      .on('data', (chunk) => {
        data+= chunk;
      })
      .on('end', () => {
        let parsedCSS = parseCSS(data);

        const writableStream  = fs.WriteStream(fileName);
        writableStream.write(parsedCSS,'UTF8');
      }).
      on('error', err => {throw new Error(err)})
}


  function parseCSS(data){
    try{
      var obj = css.parse(data);
    }catch(err){
      throw new Error(err);
    }

    try{
      var sheet = obj.stylesheet;
    }catch(err){
      throw new Error(err);
    }    
    
    sheet.rules.forEach(function(element, index, array){
      element.declarations.sort(compare);
    });

    var stylesheet = css.stringify(obj);
    return stylesheet;
  }

  function compare(a,b) {
    if (a.property < b.property)
      return -1;
    if (a.property > b.property)
      return 1;
    return 0;
  }

module.exports = {readCSSfile, parseCSS}