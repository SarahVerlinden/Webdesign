$(document).ready(function() {
  $("#welkom").hide();
  $("#opleidingen").hide();
  $("#info").hide();
  $("#wiinfo").hide();
  $("#chinfo").hide();
  $("#frinfo").hide();
  $("#kost").hide();
  $("#wikost").hide();
  $("#chkost").hide();
  $("#frkost").hide();
  $("#verder1").click(function() {
    var naam = $("#naam").val();
    $("#welkom").append(naam);
    $("#welkom").show();
    $("#opleidingen").show();
  });
  let isAppendedWi = false;
  let isAppendedCh = false;
  let isAppendedFr = false;
  $("#verder2").click(function() {
    const wikost = 10;
    const chkost = 5;
    const frkost = 8;
    var wiprijs = 0;
    var frprijs = 0;
    var chprijs = 0;
    $("#info").show();
    if ($("#wikeuze").is(":checked")) {
      $("#wiinfo").show();
      if (isAppendedWi === false) {
        $("#wikost").append(wikost);
        isAppendedWi = true;
      }
      wiprijs = wikost;
      $("#wikost").show();

    } else if ($("#wikeuze").is(":not(:checked)")) {
      $("#wiinfo").hide();
      $("#wikost").hide();
    }

    if ($("#chkeuze").is(":checked")) {
      $("#chinfo").show();
      if (isAppendedCh === false) {
        $("#chkost").append(chkost);
        isAppendedCh = true;

      }
      chprijs = chkost;
      $("#chkost").show();
    } else if ($("#chkeuze").is(":not(:checked)")) {
      $("#chinfo").hide();
      $("#chkost").hide();
    }

    if ($("#frkeuze").is(":checked")) {
      $("#frinfo").show();
      if (isAppendedFr === false) {
        $("#frkost").append(frkost);
        isAppendedFr = true;

      }
      frprijs = frkost;
      $("#frkost").show();
    } else if ($("#frkeuze").is(":not(:checked)")) {
      $("#frinfo").hide();
      $("#frkost").hide();
    }
  });
});
