const form = document.getElementById('register');
const Senha = document.getElementById('Pass');
let formEvalido = false;

function validaSenha(Password) {
    let SenhaValida = Password;
    return SenhaValida.length >= 8;
}

form.addEventListener('submit', function (e) {
    let formEvalido = false;
    e.preventDefault();

    const primeiroNome = document.getElementById('Name');
    const sobrenome = document.getElementById('LastName');
    const email = document.getElementById('Mail');
    const dataNascimento = document.getElementById('Bday');
    const endereço = document.getElementById('Address');
    const mensagemSucesso = `Seu registro foi um sucesso, ${primeiroNome.value}, um email de confirmação foi enviado para ${Mail.value}`;

    formEvalido = validaSenha(Senha.value)
    if (formEvalido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        primeiroNome.value = '';
        sobrenome.value = '';
        email.value = '';
        dataNascimento.value = '';
        endereço.value = '';
        Senha.value = '';
    } else {
        Senha.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

Senha.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEvalido = validaSenha(e.target.value);

    if (!formEvalido) {
        Senha.classList.add('error');
        document.querySelector('.error.message').style.display = 'block';
    } else {
        Senha.classList.remove('error');
        document.querySelector('error-message').style.display = 'none';
    }
});

console.log(form);