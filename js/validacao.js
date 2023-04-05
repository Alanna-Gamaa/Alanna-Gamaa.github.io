$(function () {
// lembrar de retirar depois 
  
  $('#form').submit(function(event) {
    // Impedir que o formulário seja enviado por meio de HTTP
    event.preventDefault();

    // Capturar os dados do formulário
    var formData = $(this).serialize();

    // Enviar a solicitação AJAX usando post()
    $.post('dados.php', formData, function(response) {
      // Manipular a resposta do servidor
      console.log(response);
    });
  });

  $(document).ready(function(e) {
    $('#ncel').mask('(00) 0000-0000');
    $('#cep').mask('00000-000');
    $('#sal').mask('0.000,00');


    $.validator.addMethod("lettersOnly", function(value, element) {
      return this.optional(element) || /^[a-zA-Z]+$/i.test(value);
    }, "Por favor, digite somente letras.");

      $('#form').validate({
        rules: {
          nome: {
            required: true,
            minlength: 5,
            lettersOnly: true
          },

          nascimento:{
            required:true,
            max:   function() {
              var today = new Date();
              var dd = today.getDate();
              var mm = today.getMonth()+1; //January is 0!
              var yyyy = today.getFullYear();
              if(dd<10) dd='0'+dd;
              if(mm<10) mm='0'+mm;
              today = yyyy+'-'+mm+'-'+dd;
              return today;
            }
          },
          nacionalidade:{
            required: true,
            lettersOnly: true
          },
          cel:{
            required: true
          }
          ,
          rua:{
            required: true
          },
          numero:{
            required: true,
            number: true
          },
          cidade:{
            required: true,
            lettersOnly: true
          },
          estado:{
            required: true,
            lettersOnly: true
          },
          cep:{
            required: true
            
          },
          bairro:{
            required: true,
            lettersOnly: true
          },
          genero:{
            required: true
          },
          ensino:{
            required: true
          },
          exp:{
            required: true
          },
          habTec:{
            required: true
          },
          idioma:{
            required: true
          },
          atividadesCom:{
            required: true
          },
          dis_inicio:{
            required:true,
            min:   function() {
              var today = new Date();
              var dd = today.getDate();
              var mm = today.getMonth()+1; //January is 0!
              var yyyy = today.getFullYear();
              if(dd<10) dd='0'+dd;
              if(mm<10) mm='0'+mm;
              today = yyyy+'-'+mm+'-'+dd;
              return today;
            }

          }


        },
        messages: {
          nome: {
            required:"Por favor, preencha o campo nome." ,
            minlength:'O nome deve ter no minimo 5 digitos',
            lettersOnly: "Por favor, digite somente letras."
          },

          nascimento:{
            required: "Por favor, selecione uma data.",
        
            max: "Por favor, verifique a data de nascimento"
          },
          nacionalidade:{
            required: "Por favor selecione uma nacionalidade",
            lettersOnly: "Por favor, digite somente letras."
          },
          cel:{
            required:"Por favor, preencha o campo"
          }
          ,
          rua:{
            required:"Por favor, preencha o campo"
          },
          numero:{
            required:"Por favor, preencha o campo",
            number: "Somente numeros"
          },
          cidade:{
            required: "Por favor, preencha o campo",
            lettersOnly: "Por favor, digite somente letras."
          },
          estado:{
            required: "Por favor, preencha o campo",
            lettersOnly: "Por favor, digite somente letras."
          },
          cep:{
            required: "Por favor, preencha o campo",
          },
          bairro:{
            required: "Por favor, preencha o campo",
            lettersOnly: "Por favor, digite somente letras."
          },
          genero:{
            required: "Por favor, preencha o campo"
          },
          ensino:{
            required: "Por favor, preencha o campo"
          },
          exp:{
            required: "Por favor, preencha o campo"
          },
          habTec:{
            required: "Por favor, preencha o campo"
          },
          idioma:{
            required: "Por favor, preencha o campo"
          },
          atividadesCom:{
            required: "Por favor, preencha o campo"
          },
          dis_inicio:{
            required:"Por favor, preencha o campo",
            min:  'Por favor, informe uma data futura'
          }


        }
        
    ,
      submitHandler: function(form) {
      form.submit();
    }
      });
    });

})
