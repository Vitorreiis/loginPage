const iconeTemp = document.getElementById('icone_temp');
const grausTemp = document.getElementById('graus_temp');
const localidade = document.getElementById('localizade');

let latitude;
let longitude;

const localizacao = navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

function successCallback (position){
  console.log(position);

   latitude = position.coords.latitude;
   longitude = position.coords.longitude;

   getApi();
}

function errorCallback (error){
  console.log(error)
}

function getApi(){
  fetch(`http://api.weatherapi.com/v1/current.json?key=29767ceb089a49a6b0c140800221710&q=${latitude},${longitude}`)
  .then(resposta => resposta.json())
  .then(corpo => {showClima(corpo); console.log(corpo)})
}

function showClima({current, location}){
  iconeTemp.setAttribute('src', current.condition.icon);
  grausTemp.innerHTML = Math.trunc(current.temp_c) + '°';
  localidade.innerHTML = location.region;
}

