// player "X" always goes first, and player "O" always goes second
  var turn = "X";

-  // count how many moves have happened since reset
-  // a full game is 9 moves
-  var moves = 0;
-
  // helper function to reset the game
  function resetGame() {
    // reset the board itself
@@ -24,7 +20,6 @@ $(document).ready(function() {

    // reset the variables that track game progress
    turn = "X";
-    moves = 0;
  };

  // helper function to change turn to the next player
@@ -100,6 +95,20 @@ $(document).ready(function() {
    return diagonalWinner() || (rowWinner() || columnWinner());
  };

+  // helper function to check if whole board is full
+  function boardHasEmptyBoxes() {
+    // start by assuming no empty boxes
+    var hasEmptyBoxes = false;
+    // check if every box is empty
+    for (var i=0; i<$boxes.length; i++){
+      // as soon as an empty box is found, update hasEmptyBoxes
+      if ($boxes.eq(i).text() === ''){
+        hasEmptyBoxes = true;
+      }
+    }
+    return hasEmptyBoxes;
+  }
+


  /**** EVENT LISTENERS ****/
@@ -110,8 +119,6 @@ $(document).ready(function() {
  });

  // listen for clicks on each box to play the game
-  // ('event delegation' is a more efficient way to do this part,
-  // but we'll keep it simple for now)
  $boxes.on('click', function() {
    // check if this box is already claimed
    if ($(this).text() === "") {
@@ -120,8 +127,7 @@ $(document).ready(function() {
      // mark this box
      $(this).text(turn);
      $(this).addClass(turn);
-      // increase move counter
-      moves += 1;
+

      // check for a winner
      var winner = getWinner();
@@ -130,10 +136,10 @@ $(document).ready(function() {
        // alert the win and reset the game
        alert("Player " + winner + " won!");
        resetGame();
-      } else if (moves < 9) {
+      } else if (boardHasEmptyBoxes()) {
        // there is no winner, yet,
-        // but since fewer than 9 moves have been made,
-        // there are empty spaces left.  on to the next turn!
+        // but there are empty spaces left.
+        // on to the next turn!
        changeTurn();
      } else {
        // there is no winner, and there are no empty spaces
       // alert the result and reset the game
       alert("Neither player won!");
       resetGame();
     }
   }
 });


});
