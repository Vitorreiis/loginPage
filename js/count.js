/*
* 
* 
* Arquivo temporizador de 600 segundos para redirecionar para a LoginPage
* 
* 
*/

const displaySeconds = document.getElementById('contador_seconds');


let seconds = 600;

setInterval(function(){
        if(seconds > 0){
            seconds--
        }else{
            window.location.replace('/index.html');
        }
        displaySeconds.innerHTML = seconds;
}, 1000)
