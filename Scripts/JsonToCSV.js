var obj = { "label":"value", "nestedLabel":{"nestedLabel2":"value2"} }
function iterateObject(obj) {
  var value = '', header = '';
          for (let array in obj) {
            if (obj.hasOwnProperty(array)) {
              if (isObject(obj[array])) {
                var out = iterateObject(obj[array]);
                value += out.value;
                header += out.header;
              } else {
                value += removeNewLine(obj[array]) + '; ';
                header += array + '; ';
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