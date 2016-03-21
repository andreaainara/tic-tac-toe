// wait for the DOM to finish loading
var turn = 0;

$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

  $(".box").on("click", function onClick(event) {
    if($(this).html() === '') {
      if (turn % 2 !==0) {
        $(this).text('O');
        turn +=1;
      } else {
        $(this).text('X');
        turn +=1;
      }
    } else {
        return false;
    }


  });
$("button.btn").on("click", function handleReset(event) {
  $(".box").text('');
  turn = 0;
});






});
