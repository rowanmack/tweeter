$(document).ready(function() {

  console.log("html loaded correctly!");

  $("#tweet-text").keyup(function(event) {
    let keytotal = 140;
    const keycount = $(this).val().length;
    keytotal -= keycount;
   
    console.log("keytotal:", keytotal);

    if (keytotal < 0) {
      $(".counter").css({'color': '#FF0000'})
      } else {
        $(".counter").css({'color': '#4C4E52'})
      }

    // $(this).parent().find("output.counter").val(keytotal)
    const counter = $(this).parent().find("output.counter").val(keytotal)
    
    
  });

  // input textarea should decrease the counter
  //class="counter"


});