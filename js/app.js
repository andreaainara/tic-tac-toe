var turn = "X";
var moves = 0;


function resetGame() {}
 $(document).ready(function() {
   turn = "X";
   moves = 0;
 }



$(document).ready(function() {
   return diagonalWinner() || (rowWinner() || columnWinner());
 });


   function boardHasEmptyBoxes() {
    var hasEmptyBoxes = false;
    for (var i=0; i<$boxes.length; i++){
      if ($boxes.eq(i).text() === ''){
        hasEmptyBoxes = true;
      }
    }
    return hasEmptyBoxes;
  }




$(document).ready(function() {
 });


 $boxes.on('click', function() {
   if ($(this).text() === "") {

 $(document).ready(function() {
     $(this).text(turn);
     $(this).addClass(turn);
     moves += 1;
   }
 );
 }


     var winner = getWinner();

 $(document).ready(function() {
       alert("Player " + winner + " won!");
       resetGame();
    else if (moves < 9); {
    else if (boardHasEmptyBoxes()) {
       changeTurn();
    else {
      alert("Neither player won!");
      resetGame();
    }
  }
}
});
