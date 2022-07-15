//  ideas
//  think about a gradient generator with the standart methods hue

var count = 0;

// convert hex to decimal
const hexToDecimal = hex => parseInt(hex, 16);

// grab json obj
// async function loadNames() {
//   response = await fetch('../data/data.json');
//   dataObj = await response.json();
// }
// loadNames();

// this data is there to not have the webserver running
dataObj = [{"name":"Winter Blue","color_one":"#a2d7e5", "color_two":"#59a1d9"},
{"name":"Cold Evening","color_one":"#ea498b", "color_two":"#59a1d9"},
{"name":"Bourbon","color_one":"#ec6f66", "color_two":"#f3a183"},
{"name":"Stellar","color_one":"#7474BF", "color_two":"#348AC7"},
{"name":"Clouds","color_one":"#ECE9E6", "color_two":"#FFFFFF"},
{"name":"Moonrise","color_one":"#DAE2F8", "color_two":"#D6A4A4"},
{"name":"Peach","color_one":"#ED4264", "color_two":"#FFEDBC"},
{"name":"Dracula","color_one":"#DC2424", "color_two":"#4A569D"},
{"name":"Mantle","color_one":"#24C6DC", "color_two":"#514A9D"},
{"name":"Hard Gradient","color_one":"#000000", "color_two":"#ffffff"}];


function lastColor(){
  if ((count) == 0) {
    count = Object.keys(dataObj).length;
  }

  count -= 1;
  changeColor();
}

function nextColor(){
  // console.log(Object.keys(dataObj).length);
  // console.log(count);

  if ((count + 1) == Object.keys(dataObj).length) {
    count = -1;
  }

  count += 1;
  changeColor();
}

function changeColor(){
  document.getElementById('bg').style.background = `linear-gradient(90deg, ${dataObj[count].color_one}, ${dataObj[count].color_two})`;
  document.getElementById('gradientNameH1').innerHTML = `${dataObj[count].name}`;
  document.getElementById('colorOne').innerHTML = `${dataObj[count].color_one}`;
  document.getElementById('colorTwo').innerHTML = `${dataObj[count].color_two}`;

  textColToLight();
}

function textColToLight(){
  // geting the light val of the avg of the r g b value
  // the threshold can be changed in the if

  var hexCodeOne = `${dataObj[count].color_one}`.slice(1);
  var hexCodeTwo = `${dataObj[count].color_two}`.slice(1);

  var lightValueOne = getLightLvl(hexCodeOne);
  var lightValueTwo = getLightLvl(hexCodeTwo);

  var lightAvg = (lightValueOne + lightValueTwo) / 2;

  // 195 is a working threshold
  if (lightAvg > 195) {
    var textCol = '#00000030';
    var hexTextCol = '#00000050';
    var buttonCol = '#00000030';
  }
  else {
    var textCol = '#ffffff30';
    var hexTextCol = '#ffffff';
    var buttonCol = '#ffffff60';
  }

  document.getElementById('gradientNameH1').style.color = textCol;
  document.getElementById('colorOne').style.color = hexTextCol;
  document.getElementById('colorTwo').style.color = hexTextCol;
  document.getElementById('back').style.color = buttonCol;
  document.getElementById('next').style.color = buttonCol;
}

// the one line func would be
// const getLightLvl = color => (hexToDecimal(color.slice(0, 2)) + hexToDecimal(color.slice(2, 4)) + hexToDecimal(color.slice(4, 6))) / 3;
// sometimes there should not be one :)

function getLightLvl(color){
  var r = hexToDecimal(color.slice(0, 2));
  var g = hexToDecimal(color.slice(2, 4));
  var b = hexToDecimal(color.slice(4, 6));

  return (r + g + b) / 3;
}
