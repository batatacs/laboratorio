$(document).ready(function(){
});
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules:{
            nome:{
                required: true,
                nome: true
            },
            email:{
                required: true,
                email: true
            },
        },
        messages: {
            nome: 'Por favor , insira o seu nome completo'
        }
    });