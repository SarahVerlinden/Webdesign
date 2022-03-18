$(document).ready(function() {
  $("#welkom").hide();
  $("#opleidingen").hide();
  $("#info").hide();
  $("#wi").hide();
  $("#ch").hide();
  $("#fr").hide();
  $("#ge").hide();
  $("#verder1").click(function() {
    var naam = $("#naam").val();
    $("#welkom").append(naam);
    $("#welkom").show();
    $("#opleidingen").show();
  });
  $("#verder2").click(function() {
    $("#info").show();
    var opleiding = $(":checked").val();
    if(opleiding==="wiskunde"){
     $("#wi").show();
      $("#ch").hide();
      $("#fr").hide();
      $("#ge").hide();
    }
    if(opleiding==="chemie"){
      $("#ch").show();
      $("#wi").hide();
      $("#fr").hide();
      $("#ge").hide();
    }
    if(opleiding==="frans"){
      $("#fr").show();
      $("#ch").hide();
      $("#wi").hide();
      $("#ge").hide();
    }
    if(opleiding==="geen"){
      $("#ge").show();
      $("#ch").hide();
      $("#fr").hide();
      $("#wi").hide();
    }
  });
});
