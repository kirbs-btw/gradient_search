function generateHexColor(){
  var hexColor = '#';

  for (var i = 0; i < 3; i++) {
    var num = Math.floor(Math.random() * 256);
    var hex = num.toString(16);

    if (num <= 16) {
      hex = '0' + hex;
    }
    hexColor += hex;
  }
  console.log(num);
  console.log(hexColor);
}

function generateGradient(){

}


generateHexColor();
