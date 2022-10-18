/*
* 
* 
* Arquivo principal que chama outros arquivos js
* 
* 
*/

import { checkInputs } from "./checkInputs.js";

const form = document.getElementById('form');


form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
})

