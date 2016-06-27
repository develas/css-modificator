const fs = require('fs');

// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' CSS_file');
  process.exit(1);
}

const fileName = process.argv[2];
console.log(fileName);

const readableStream  = new fs.ReadStream(fileName);

var data = '';
var result;

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



function parseCSS(data){
  var css = require('css');
  try{
    var obj = css.parse(data);
  }catch(err){
    console.log(err.message);
  }

  var sheet = obj.stylesheet;

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

