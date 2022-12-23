//creado por Alex CS
$(document).ready(function () {
  
  //ejercicio1(imp, papl);
});

function ejercicio1(){
  //limpio el div
  var html= ""
  $("#divdinamico").empty();
  var anticipo = 0;

  var imp = $("#impuestorneto").val();
  var papl = $("#paplicar").val();
  anticipo = imp*papl;
  html = '<div class="col-lg-12 col-md-12">'+
              '<div class="service-item position-relative">'+
              '<div class="icon"> <i class="bi bi-broadcast">'+
              '</i>'+
              '</div>'+
              '<h3>El valor del anticipo a pagar es: </h3>'+
              '<h2>'+
              anticipo
              '</p> '+
              '</div>'+
              '</div>';

  $("#divdinamico").append(html );
}