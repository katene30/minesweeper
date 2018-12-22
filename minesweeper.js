document.addEventListener('DOMContentLoaded', startGame)
// Define your `board` object here!
var board = {
   cells: generateCells(6)
 }
//     {
//       row: 0,
//       col: 0,
//       isMine: false,
//       hidden: true,
//     },
//     {
//       row: 1,
//       col: 0,
//       isMine: false,
//       hidden: true,
//     },
//     {
//       row: 0,
//       col: 1,
//       isMine: false,
//       hidden: true,
//     },
//     {
//       row: 1,
//       col: 1,
//       isMine: false,
//       hidden: true,
//     },
//   ]


function generateCells (size) {

  // create a cells array
  // make a loop that automatically generate generateCells
  // fill the cells aray with the generated cells
  //return a cells array
  var cells = []

  for (i = 0; i < size; i++ ) {

    for (j = 0; j < size; j++){
        cell = {
               row: i,
               col: j,
               isMine: mineRandom(),
               isMarked: false,
               hidden: true,
        }

      cells.push(cell)
    }
  }

  return cells
}

function mineRandom () {
  cellChance = Math.round(Math.random() * 99);
  if (cellChance < 20) {
    return true
  } else {
    return false
  }
}

function startGame () {
  // Don't remove this function call: it makes the game work!
// board.cells[4].isMine = true

for (i = 0; i < board.cells.length; i++) {
  board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
}


  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
document.addEventListener("click", checkForWin);
document.addEventListener("contextmenu", checkForWin);


function checkForWin (){
  for (var i = 0; i < board.cells.length; i++){
    var check = board.cells[i];
    if(!check.isMine && check.hidden){
      return false;
    } else if (check.isMine && !check.isMarked) {
      return false;
    }else if (!check.hasOwnProperty("isMarked"))
    return false;
  }

     lib.displayMessage('You win!')
  }

//  else if( countVisibleNonMines = !visibleNonMines ) {
//      console.log(" Try Again ")
//      }

//    }

//
//
//   // Once [ c ] is equal to visibleNonMines the user wins.
//   // Create an if statement for if they are equal console log this, if this is not true console.log try again.
//
//
  // if (countVisibleNonMines = visibleNonMines ) {
  //   	 console.log (lib.displayMessage('You win!’))
  //   	 }

  // if else ( countVisibleNonMines = !visibleNonMines ) {
  //   	console.log(“ Try Again ”)
  //   	}

  //   }
//
//
//   // Count through the array and count all of the mines and mark it [ a ]
//   // Then, [ a ] Mines - all cells on the board  = visibleNonMines


// if nonMinesCount = nonMinesVisible then you win
// how many aren't mines
function nonMinesCount (cell) {
  var mine = 0
  for (i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine === true) {
      mine++
    }
  }
  console.log(board.cells.length - mine)
  return board.cells.length - mine
}
//  how many non mines are showing
function nonMinesVisible (cell) {
  var count = 0
  for (i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine === false && board.cells[i].hidden === false) {
      count ++
    }
  }
  console.log(count)
  return count
}




function mineMarked (cell) {
  var count = 0
  for (i = 0; i < board.cells.length; i++) {
    if(board.cells[i].isMine === true && board.cells[i].isMarked === true) {
      count ++
    } 
  }
  return count
}

function cellsShown (cell) {
  for (i = 0; i < board.cells.length; i++) {
    if (board.cells[i].hidden === true) {
      return false
    } else {
      return true
    }
  }
}



















// function visibleNonMines (cell) {
//   var mine = 0

//   for (a=0; a < board.cells.length; a++) {
//     if (cell[a].isMine){
//       mine ++
//     }
//   }
//   return mine - cells
// }
// Function visibleNonMines (cell) {
//
// Var mine = 0
//
//   For (a =0; a < board.cells.length; a++){
//     If ( cell[a].isMine ){
//   	   mine ++
//   	}
//   }
//
// return mine - cells
//
//   }
//
//
//
// Count through the array again and count all the cells that are not mines and mark it [ b]
// Then count through all the nonMines [ b ] and for every one that has the value hidden = false increase a number called [ c ].
function countVisibleNonMines (cell) {
  var count = 0
  for (b = 0; b < board.cells.length; b++) {
    if (board.cells.hidden === false) {
      count++
    }
  }
  return count
}
//
//
// Function countVisibleNonMines (cell) {
//
//   Var count = 0
//
//     For (b =0; b < board.cells.length; b++){
//   	   if ( cell[b].!hidden .!isMine){
//   		count++
//   	}
//   }
//
// Return count
// }


function countSurroundingMines (cell) {

// make a surround array variable using the lib function
// make a count variable that starts at 0
// loop through all the surrounding cells, and if they are a mine, add to the count.
// return the counts
//

var surrounding = lib.getSurroundingCells(cell.row, cell.col)
var count = 0

for (j = 0; j < surrounding.length; j++) {
  if (surrounding[j].isMine){
    count++
  }
}

return count
}
