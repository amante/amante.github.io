var obj = { "label":"value", "nestedLabel":{"nestedLabel2":"value2"} }
function iterateObject(obj) {
  var value = '', header = '';
          for (name in obj) {
            if (obj.hasOwnProperty(name)) {
              if (isObject(obj[name])) {
                var out = iterateObject(obj[name]);
                value += out.value;
                header += out.header;
              } else {
                value += removeNewLine(obj[name]) + '; ';
                header += name + '; ';
              }
            }
          }
  return {
    "value":value,
    "header":header
  };
}
function isObject(obj) {
  return (typeof obj === 'object');
}
function removeNewLine(item) {
  return item.toString().replace(/(\r\n|\n|\r)/gm,"");
}

var results = iterateObject(obj);
$('#resultValue').html(results.value);
$('#resultHeader').html(results.header);