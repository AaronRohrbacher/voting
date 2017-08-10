$(document).ready(function(){
  var age=parseInt(prompt("Please enter your age"));

    if (age >= 18) {
      $('#over18').show();
    } else {
      $("#under18").show();
    }
});
