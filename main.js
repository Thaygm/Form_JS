const form = document.getElementById('register');

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
    const Senha = document.getElementById('Pass');
    const MensagemSucesso = `Seu registro foi um sucesso, ${primeiroNome.value}, um email de confirmação foi enviado para ${Mail.value}`;

    formEvalido = validaSenha(Senha.value)
    if (formEvalido) {
        alert(MensagemSucesso);

        primeiroNome.value = '';
        sobrenome.value = '';
        email.value = '';
        dataNascimento.value = '';
        endereço.value = '';
        Senha.value = '';
    } else {
        alert('Preencha os campos corretamente!');
    }
})

console.log(form);