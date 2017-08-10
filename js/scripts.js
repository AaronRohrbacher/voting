$(document).ready(function(){
  $("#form").submit(function(){
    event.preventDefault();
  var animalType = $("#animal").val();
    if (animalType === "snake") {
      $("#snake").slideToggle();
      $("#insect").hide();
      $("#turtle").hide();
    } else if (animalType === "insect") {
      $("#insect").slideToggle();
      $("#snake").hide();
      $("#turtle").hide();
    } else if (animalType === "turtle") {
      $("#turtle").slideToggle();
      $("#snake").hide();
      $("#insect").hide();
    }
  });
});
