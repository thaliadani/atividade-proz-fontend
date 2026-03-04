const inputUsuario = document.getElementById('usuario');
const inputSenha = document.getElementById('senha');
const btnEntrar = document.getElementById('btn-entrar');
const btnMostrarSenha = document.getElementById('btn-mostrar-senha');

let usuario = 'admin';
let senha = '12345678';

btnEntrar.addEventListener('click', (event) => {
    event.preventDefault();
    if (inputUsuario.value === usuario && inputSenha.value === senha) {
        window.location.href = './src/pages/inicio.html';
    } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
    }
});

btnMostrarSenha.addEventListener('click', function() {
    let senhaDigitada = inputSenha.value; 

    if (senhaDigitada.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
});
