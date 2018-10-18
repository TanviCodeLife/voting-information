$(document).ready(function() {
  // $("form#submit").submit(function(event){

  var age = parseInt(prompt("How old are you?"));
    console.log(age);
    if (age > 18) {
      $("#over-18").show();
    } else if (age === 18) {
      alert("welcome first time voter!");
      $("#over-18").show();
    } else {
      $("#under-18").show();
    }
  //   event.preventDefault();
  // });
});
