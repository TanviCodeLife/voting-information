//business-logic
var inputOption;
function checkAge(){
  if (inputOption > 18) {
    $("#over-18").show();
    $("#under-18").hide();
  } else if (inputOption === 18) {
    alert("welcome first time voter!");
    $("#over-18").hide();
    $("#over-18").show();
    $("#under-18").hide();
  } else {
    $("#under-18").show();
    $("#over-18").hide();
  }
}

//front-end logic
$(document).ready(function() {
  $("form#submit").submit(function(event){
  inputOption = parseInt($("input:radio[name=radio-stacked]:checked").val());
  console.log(inputOption);
  checkAge(inputOption);
  event.preventDefault();
  });
});
