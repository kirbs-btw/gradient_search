var count = 0;

async function loadNames() {
  response = await fetch('../data/data.json');
  dataObj = await response.json();
}

loadNames();

function changeColor(){
  console.log(Object.keys(dataObj).length);
  console.log(count);

  if ((count + 1) == Object.keys(dataObj).length) {
    count = -1;
  }

  count += 1

  //console.log(count);
  //console.log(dataObj.name);
  //console.log(dataObj[count]);

  document.getElementById('bg').style.background = `linear-gradient(90deg, ${dataObj[count].color_one}, ${dataObj[count].color_two})`;
  document.getElementById('gradientNameH1').innerHTML = `${dataObj[count].name}`;
  document.getElementById('colorOne').innerHTML = `${dataObj[count].color_one}`;
  document.getElementById('colorTwo').innerHTML = `${dataObj[count].color_two}`;
  // console.log(count);
}
