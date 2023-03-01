$(document).ready(function() {

  console.log("html loaded correctly!");

  $("#tweet-text").keyup(function(event) {
    let keytotal = 140;
    const keycount = $(this).val().length;
    keytotal -= keycount;

    if (keytotal < 0) {
      $(".counter").css({'color': '#FF0000'})
      } else {
        $(".counter").css({'color': '#4C4E52'})
      }

    const counter = $(this).parent().find("output.counter").val(keytotal)
    
  });
});