/*
* 
* 
* Arquivo que faz a validação dos inputs da página de Login Page
* 
* 
*/
 let usuario= {
    login: 'admin',
    password: 'admin',
}

const email = document.getElementById('username');
const senha = document.getElementById('password');
const textErrorNone = document.getElementById('h4-error');

export function checkInputs(){
    const emailValue = email.value;
    const senhaValue = senha.value;

    if (emailValue == ''){
        setErrorFor(email, textErrorNone);
    }
    if (senhaValue == ''){
        setErrorFor(senha, textErrorNone);
    }
    if(emailValue != usuario.login){
        setErrorFor(email, textErrorNone);
    }
    if(senhaValue != usuario.password){
        setErrorFor(senha, textErrorNone);
    }
    if(emailValue == usuario.login && senhaValue == 'admin'){
        localStorage.setItem('usuario', JSON.stringify(usuario));
        window.location.replace('/pages/home/home_page.html');
    }
}


function setErrorFor(input, erro){
    const formControl = input.parentElement;
    const error = erro.parentElement;

    formControl.classList.add("input-error");
    error.classList.add("text-error-block");
}