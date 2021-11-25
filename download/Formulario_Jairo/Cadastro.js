function ola() {	
	window.alert('Preencha corretamente seus dados');	
}
function ola2() {	
	window.alert('Ótimo! Estamos quase lá. Agora verifique sua caixa de entrada de email para ter acesso novamente a sua conta');	
}

function ola3() {

            if (confirm("Deseja cancelar essa operação?")) {

                return true;

            } else {

                return false;

            }

        }

function validacao() {
	if (document.form.nome.value=="") {
		alert ("Por favor, preencha o campo Nome.");
		document.form.nome.focus();
		return false;
	}

	if (document.form.cpf.value=="") {
		alert ("Por favor, preencha o campo CPF.");
		document.form.cpf.focus();
		return false;
	}

	if (document.form.date.value=="") {
		alert ("Por favor, preencha o campo Data de Nascimento.");
		document.form.date.focus();
		return false;
	}

	if (document.form.cep.value=="") {
		alert ("Por favor, preencha o campo CEP.");
		document.form.cep.focus();
		return false;
	}

	if (document.form.cidade.value=="") {
		alert ("Por favor, preencha o campo Cidade.");
		document.form.cidade.focus();
		return false;
	}

	if (document.form.senha.value.length < 8) {
		alert ("A senha deve conter no mínimo 8 caracteres.");
		document.form.senha.focus();
		return false;
	}
}
