$(document).ready(function(){
  $(function(){
          $().typed({
              strings: ["CSS3" , "Javascript", "SASS","HTML5","Jade"],
              typeSpeed: 50,
              backDelay: 2150,
              loop: true,
              contentType: 'html',
              loopCount: false,
              callback: function(){ foo(); },
              resetCallback: function() { newTyped(); }
          });

          $(".reset").click(function(){
              $("#typed").typed('reset');
          });

      });

      function newTyped(){ /* A new typed object */ }

      function foo(){  }


  $( "#radio-sass" ).click(function(){
    $(".area-3d .cubo-3d").css("transform","rotateX(-90deg)");
    $(".titulo-tecnologias h4").text("SASS");
    $(".desenvolvimento-texto p").text(textoSass);
  })

  $( "#radio-css" ).click(function(){
    $(".area-3d .cubo-3d").css("transform","rotateY(-90deg)");
    $(".titulo-tecnologias h4").text("CSS3");
    $(".desenvolvimento-texto p").text(textoCss);
  })

  $( "#radio-jade" ).click(function(){
    $(".area-3d .cubo-3d").css("transform","rotateY(90deg)");
    $(".titulo-tecnologias h4").text("JADE");
    $(".desenvolvimento-texto p").text(textoJade);
  })

  $( "#radio-js" ).click(function(){
    $(".area-3d .cubo-3d").css("transform","rotateX(90deg)");
    $(".titulo-tecnologias h4").text("JavaScript/Jquery");
    $(".desenvolvimento-texto p").text(textoJs);
  })

  $( "#radio-html" ).click(function(){
    $(".area-3d .cubo-3d").css("transform","rotateY(180deg)");
    $(".titulo-tecnologias h4").text("HTML5");
    $(".desenvolvimento-texto p").text(textoHtml);
  })

  $( ".radios" ).click(function(){
    $(".area-3d .cubo-3d").css("animation-name","none");
  })


  var textoHtml = "HTML5 é a mais recente evolução do padrão que define o HTML. O termo representa dois diferentes conceitos: é uma nova versão da linguagem HTML, com novos elementos, atributos, e comportamentos. e um conjunto maior de tecnologias que permite o desenvolvimento de aplicações e web sites mais diversos e poderosos."
  var textoCss = "CSS3 é a mais nova versão das famosas Cascading Style Sheets (ou simplesmente CSS), onde se define estilos para páginas web com efeitos de transição, imagem, e outros, que dão um estilo novo às páginas Web 2.0 em todos os aspectos de design do layout.A principal função do CSS3 é abolir as imagens de plano de fundo, bordas arredondadas, apresentar transições e efeitos para criar animações de vários tipos, como um simples relógio de ponteiros."
  var textoJade = "O Jade é muito mais que uma sintaxe limpa para seu HTML. Um grande recurso do Jade é o uso da herança de templates e includes. É possível criar uma página base e então criar páginas que estendam esta página com um conteúdo específico. Assim, conseguimos criar um template com os trechos que se repetem em nosso site, como o cabeçalho, o rodapé, etc."
  var textoSass = "SASS / SCSS é uma plataforma pra desenvolver CSS de forma mais proveitosa e produtiva, podendo dividir em vários arquivos .scss e formando um único .css, possibilitando várias pessoas trabalharem no mesmo CSS de um projeto."
  var textoJs = "jQuery é uma biblioteca JavaScript cross-browser desenvolvida para simplificar os scripts client side que interagem com o HTML.[1] Ela foi lançada em dezembro de 2006 no BarCamp de Nova York por John Resig. Usada por cerca de 77% dos 10 mil sites mais visitados do mundo, jQuery é a mais popular das bibliotecas JavaScript."

  inicio();
})

inicio =  function(){
  $(".area-3d .cubo-3d").css("transform","rotateX(-90deg)");
  $(".titulo-tecnologias h4").text("SASS");
}
