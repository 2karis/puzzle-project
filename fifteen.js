var moves = 0;
var table; 
var rows; 
var columns;
var textMoves;
var arrayForBoard;

function start()
{
  var button = document.getElementById("newGame");
  button.addEventListener( "click", startGame, false );
  textMoves = document.getElementById("moves");
  table = document.getElementById("table");
  rows = 4;
  columns = 4;
  startGame();
}

function startGame()
{
  var arrayOfNumbers = new Array();
  var usedNumber;
  var randomNumber = 0;
  var count = 0;
  moves = 0;
  rows = document.getElementById("rows").value;
  columns = document.getElementById("columns").value;
  textMoves.innerHTML = moves;
  // Create the proper board size.
  arrayForBoard = new Array(rows);
  for (var i = 0; i < rows; i++)
  {
    arrayForBoard[i] = new Array(columns);
  }
  usedNumber = new Array( rows * columns );
  for (var i = 0; i < rows * columns; i++)
  {
    usedNumber[i] = 0;
  }
 
  for (var i = 0; i < rows * columns; i++)
  {
    randomNumber = Math.floor(Math.random()*rows * columns);
    if (usedNumber[randomNumber] == 0) 
    {
      usedNumber[randomNumber] = 1;
      arrayOfNumbers.push(randomNumber);
    }
    else 
    {
      i--;
    }
  }
  
  // Assign numbers to the game board.
  count = 0;
  for (var i = 0; i < rows; i++)
  {
    for (var j = 0; j < columns; j++)
    {
      arrayForBoard[i][j] = arrayOfNumbers[count];
      
      count++;
    }
  }
  showTable();
}

function showTable()
{
  var outputString = "";
  for (var i = 0; i < rows; i++)
  {
    outputString += "<tr>";
    for (var j = 0; j < columns; j++)
    {
      if (arrayForBoard[i][j] == 0)
      {
	outputString += "<td class=\"blank\"> </td>";
      }
      else
      {
	outputString += "<td class=\"tile\" onclick=\"moveTile(" + i + ", " + j + ")\">" +"<img src='mario\\"+ arrayForBoard[i][j] +".jpg'>"+ "</td>";
      }
    } // end for (var j = 0; j < columns; j++)
    outputString += "</tr>";
  } // end for (var i = 0; i < rows; i++)
  
  table.innerHTML = outputString;
}

function moveTile( tableRow, tableColumn)
{
  if (tileCheck(tableRow, tableColumn, "up") ||
      tileCheck(tableRow, tableColumn, "down") ||
      tileCheck(tableRow, tableColumn, "left") ||
      tileCheck(tableRow, tableColumn, "right") )
  {
    moveCount();
  }
  else
  {
    alert("Cant move this tile, try again");
  }
    
  if (winner())
  {
    alert("【☆】★【☆】★【☆】★【☆】★【☆】Good Job You won. 【☆】★【☆】★【☆】★【☆】★【☆】 Puzzle was solved in " + moves + " moves.");
    startNewGame();
  }
}

function tileCheck(rowCoordinate, columnCoordinate, direction)
{
  rowOffset = 0;
  columnOffset = 0;
  if (direction == "up")
  {
    rowOffset = -1;
  }
  else if (direction == "down")
  {
    rowOffset = 1;
  }
  else if (direction == "left")
  {
    columnOffset = -1;
  }
  else if (direction == "right")
  {
    columnOffset = 1;
  }  
  
  if (rowCoordinate + rowOffset >= 0 && columnCoordinate + columnOffset >= 0 &&
    rowCoordinate + rowOffset < rows && columnCoordinate + columnOffset < columns
  )
  {
    if ( arrayForBoard[rowCoordinate + rowOffset][columnCoordinate + columnOffset] == 0)
    {
      arrayForBoard[rowCoordinate + rowOffset][columnCoordinate + columnOffset] = arrayForBoard[rowCoordinate][columnCoordinate];
      arrayForBoard[rowCoordinate][columnCoordinate] = 0;
      showTable();
      return true;
    }
  }
  return false; 
}

function winner()
{
  var count = 1;
  for (var i = 0; i < rows; i++)
  {
    for (var j = 0; j < columns; j++)
    {
      if (arrayForBoard[i][j] != count)
      {
	if ( !(count === rows * columns && arrayForBoard[i][j] === 0 ))
	{
	  return false;
	}
      }
      count++;
    }
  }
  
  return true;
}

function moveCount()
{
  moves++;
  if (textMoves) // This is nessessary.
  {
    textMoves.innerHTML = moves;
  }
}

window.addEventListener( "load", start, false ); 
