var count = 0;
// async function loadNames() {
//   response = await fetch('../data/data.json');
//   dataObj = await response.json();
// }
// loadNames();

dataObj = [{"name":"Winter Blue","color_one":"#a2d7e5", "color_two":"#59a1d9"},
{"name":"Cold Evening","color_one":"#ea498b", "color_two":"#59a1d9"},
{"name":"Bourbon","color_one":"#ec6f66", "color_two":"#f3a183"},
{"name":"Stellar","color_one":"#7474BF", "color_two":"#348AC7"},
{"name":"Clouds","color_one":"#ECE9E6", "color_two":"#FFFFFF"},
{"name":"Moonrise","color_one":"#DAE2F8", "color_two":"#D6A4A4"},
{"name":"Peach","color_one":"#ED4264", "color_two":"#FFEDBC"},
{"name":"Dracula","color_one":"#DC2424", "color_two":"#4A569D"},
{"name":"Mantle","color_one":"#24C6DC", "color_two":"#514A9D"}];

calcLight();

function lastColor(){
  if ((count) == 0) {
    count = Object.keys(dataObj).length;
  }

  count -= 1;
  changeColor();
}

function nextColor(){
  console.log(Object.keys(dataObj).length);
  console.log(count);

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
  const hexToDecimal = hex => parseInt(hex, 16);
  var hexCodeOne = `${dataObj[count].color_one}`.slice(1);
  var hexCodeTwo = `${dataObj[count].color_two}`.slice(1);

  var lightValueOne = hexToDecimal(hexCodeOne);
  var lightValueTwo = hexToDecimal(hexCodeTwo);

  var lightAvg = (lightValueOne + lightValueTwo) / 2;

  if (lightAvg > 16000000) {
    document.getElementById('gradientNameH1').style.color = '#00000030';
    document.getElementById('colorOne').style.color = '#00000050';
    document.getElementById('colorTwo').style.color = '#00000050';
    document.getElementById('back').style.color = '#00000030';
    document.getElementById('next').style.color = '#00000030';
  }
  else {
    document.getElementById('gradientNameH1').style.color = '#ffffff30';
    document.getElementById('colorOne').style.color = '#ffffff';
    document.getElementById('colorTwo').style.color = '#ffffff';
    document.getElementById('back').style.color = '#ffffff60';
    document.getElementById('next').style.color = '#ffffff60';
  }

  // console.log(hexToDecimal('000000'));
  // console.log(hexToDecimal('ffffff'));
  // 16777215 == white
  // 8388607.5 is the mid point
  // 0 == black

}
