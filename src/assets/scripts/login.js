const inputUsuario = document.getElementById('usuario');
const inputSenha = document.getElementById('senha');
const btnEntrar = document.getElementById('btn-entrar');

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


const togglePassword = document.getElementById('togglePassword');
const toggleIcon = document.getElementById('toggleIcon');

togglePassword.addEventListener('click', function () {
    // Toggle the type attribute
    const type = inputSenha.getAttribute('type') === 'password' ? 'text' : 'password';
    inputSenha.setAttribute('type', type);

    // Toggle the eye icon
    toggleIcon.classList.toggle('bi-eye');
    toggleIcon.classList.toggle('bi-eye-slash');
});

