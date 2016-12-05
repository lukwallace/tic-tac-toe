var turn = false;
var board = [];

var populateBoard = function () {
  for(var i = 0; i < 3; i++) {
    board.push([]);
    for(var j = 0; j < 3; j++) {
      board[i].push(0);
    }
  }
};

var checkColumn = function(colInd) {
  return board[colInd][0] + board[colInd][1] + board[colInd][2] === 3
}


var evaluateBoard = function() {
  var won = false;
  for(var i = 0; i < 3; i++) {
    if(turn) {
      won = board[i][0] + board[i][1] + board[i][2] === -3 ||
            board[0][i] + board[1][i] + board[2][i] === -3 ||
            board[0][0] + board[1][1] + board[2][2] === -3 ||
            board[0][2] + board[1][1] + board[2][0] === -3 || won;
    } else {
      won = board[i][0] + board[i][1] + board[i][2] === 3 ||
            board[0][i] + board[1][i] + board[2][i] === 3 || 
            board[0][0] + board[1][1] + board[2][2] === 3 ||
            board[0][2] + board[1][1] + board[2][0] === 3 || won;
    }
  }
  //do soemtihng based on won
  //inefficient

};


$(document).ready(function() {
  populateBoard();
  console.log(board);
  $('#board div').click(function() {
    turn = !turn;
    if($(this).hasClass('filled')) {
      return;
    };
    $(this).addClass('filled');
    $(this).addClass(turn ? 'X' : 'O');
    var coord = $(this).attr('id');
    board[coord[0]][coord[1]] = turn ? -1 : 1;
    evaluateBoard();
  });
});