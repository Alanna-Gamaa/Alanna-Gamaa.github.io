$(document).ready(function() {

  $('.dados-epresas').css('display','none');
  $('.list-idiomas').css('display','none');

    
    $('#possuo').bind('click',function () {  

    if ($('#possuo').is(':checked')) {
        $('.dados-epresas').slideDown('slow');
        $('.dados-epresas').css('display','block');
        
      } 

    })
      
    $('#n-possuo').bind('click',function () {  

        if ($('#n-possuo').is(':checked')) {
            $('.dados-epresas').slideUp('slow');
            $('.dados-epresas').css('display','none');
          } 
    
    })
          

    // =======================================

    $('#idioma-sim').bind('click',function () {  

      if ($('#idioma-sim').is(':checked')) {
          $('.list-idiomas').slideDown('slow');
          $('.list-idiomas').css('display','block');
          
        } 
  
      })
        
      $('#idioma-nao').bind('click',function () {  
  
          if ($('#idioma-nao').is(':checked')) {
              $('.list-idiomas').slideUp('slow');
              $('.list-idiomas').css('display','none');
            } 
      
      })

      //=======================================================
      var contador = 0;
      var contadorExp = 0;

      $('.add-idioma').bind('click',function () { 
        contador += 1;
          $('.add-idioma').before('<fieldset><legend>Informe os Dados em Relação o Idioma</legend><label for="nome-idioma">Nome idioma</label><input type="text" name="nome-idioma'+contador+'" placeholder="Nome do Idioma"><div class="gender-inputs"><div class="gender-title"><p>Nível de Proficiência</p></div><div class="gender-group"><div class="gender-input"><input  type="radio" name="idioma-nivel'+contador+'"><label for="baciso"> Básico</label></div><div class="gender-input"><input  type="radio" name="idioma-nivel'+contador+'"><label for="intermediario"> Intermediário</label></div><div class="gender-input"><input  type="radio" name="idioma-nivel'+contador+'"><label for="avancado">Avançado</label></div><div class="gender-input"><input  type="radio" name="idioma-nivel'+contador+'"><label for="fluente"> Fluente</label></div></div></div></fieldset>');
       })
      //====================================================
      $('.add-exp').bind('click',function () { 
        contadorExp += 1;   
         $('.add-exp').before('<fieldset><legend>Dados da Empresa</legend><div class="emp-box"><label for="name_empresa">Nome da Empresa:</label><input type="text" name="name_empresa '+contadorExp+'"  placeholder="Nome da empresa"></div><div class="emp-box"><label for="cargo_empresa">Cargo:</label><input type="text" name="cargo_empresa'+contadorExp+'"  placeholder="Nome de seu cargo"></div><div class="left"><div class="emp-box"><fieldset><legend>Período de Atuação</legend><div><label for="mes_inicio">Inicio</label><input type="month" name="mes_inicio'+contadorExp+'"></div><div><label for="mes_final">Final</label><input type="month" name="mes_final'+contadorExp+'" ></div></fieldset></div><div class="check-input-text"><label for="atividades">Principais Atividades e Responsabilidades:</label><textarea name="atividades'+contadorExp+'"  cols="30" rows="10"></textarea></div></div></fieldset>');

       })
      //====================================================
  });
  