    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00.000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            } 
        },
        submitHandler: function(form) {
            // Este bloco é acionado quando o formulário é válido e pronto para ser enviado
            alert('Seu cadastro foi realizado com sucesso!');
            form.submit(); // Envio do formulário (ou qualquer outra ação que você precise fazer)
        }
    }
)


