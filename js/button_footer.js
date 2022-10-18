const buttonContinuar = document.getElementById('buttonContinuar');

buttonContinuar.addEventListener('click', () => {
    window.location.href = "https://www.globo.com/";
})

const buttonLogout = document.getElementById('buttonLogout');
const popup = document.getElementById('popupId');

buttonLogout.addEventListener('click', () => {
    popup.classList.add('show_popup');
})

const buttonNao = document.getElementById('buttonNao');
const buttonSim = document.getElementById('buttonSim');

buttonNao.addEventListener('click', () => {
    window.location.replace('/index.html');
})

buttonSim.addEventListener('click', () => {
    window.location.replace('/index.html');
})