var count = 0;

function changeColor(){
  count += 1
  if (count % 2 == 0) {
    document.getElementById('bg').style.background = 'linear-gradient(90deg, #a2d7e5, #59a1d9)';
    document.getElementById('gradientNameH1').innerHTML = "Winter Blue";
    document.getElementById('colorOne').innerHTML = "#a2d7e5";
    document.getElementById('colorTwo').innerHTML = "#59a1d9";
    console.log(count);
  }
  else{
    document.getElementById('bg').style.background = 'linear-gradient(90deg, #ea498b, #59a1d9)';
    document.getElementById('gradientNameH1').innerHTML = "Cold Evening";
    document.getElementById('colorOne').innerHTML = "#ea498b";
    document.getElementById('colorTwo').innerHTML = "#59a1d9";
    console.log(count);
  }


}
