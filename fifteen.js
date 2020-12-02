var moves = 0;
var table;
var rows;
var columns;
var textmoves;
var boardArray;


function start()
{
	var button = document.getElementById("newGame");
	button.addEventListener("click", startNewDame, false);
	textmoves = document.getElementById("moves");
	table = document.getElementById("table");
	rows = 4;
	columns = 4;
	startGame();
}

function startGame()
{
	var numberArray = new Array();
	var usedNumberArray;
	var shuffleNumber = 0;
	var count = 0;
	moves = 0;
	
	rows = document.getElementById( "rows").value;
	columns = document.getElementById("columns").value;
	textmoves.innerHTML = moves;
	
	//array size
	boardArray = new Array(rows);
	
		for (var i = 0; i< rows; i++)
		{
			boardArray[i] = new Array(columns);
		}
		
	usedNumberArray = new Array( rows * columns );
	
		for (var i = 0; i <rows * columns; i++)
		{
			usedNumberArray[i] = 0;
		}
		
		for (var i = 0; i < rows * columns; i++)
		{
			shuffleNumber = Math.floor(Math.random() * rows * columns);
				if (usedNumberArray[shuffleNumber] == 0)
				{
					usedNumberArray[shuffleNumber] = 1;
					numberArray.push(shuffleNumber);
				}
				else 
				{
					i--;
				}
		}
	
	count = 0;
		for (var i = 0; i <rows; i++)
		{
			for (var j = 0; j <columns; j++)
			{
				boardArray[i][j] = numberArray[count];
				count++;
			}
		}
	showTable();
}

function showTable()
{
	var outString = "";
	for (var j = 0; i <rows; i++)
	{
		outString += "<tr>";
			for (var j = 0; j <columns; j++)
			{
				if (boardArray[i][j] == 0)
				{
					outString += "<td class =\"blank\"> </td>";
				}
				else 
				{
					outString += "<td class = \"tile\" onclick=\"moveTile(" + i + ", " + j + ")\">" + arrayForBoard[i][j] + "</td>";
				}
			}
		outString += "<tr>";
	}
	
	table.innerHTML = outString;	
}


function moveTile( tableRow, tableColumn)
{
	if(tileCheck(tableRow, tableColumn, "up") ||(tileCheck(tableRow, tableColumn, "down") || (tileCheck(tableRow, tableColumn, "left") || (tileCheck(tableRow, tableColumn, "right"))
	{
		countMoves();
	}
	else 
	{
		alert( "Can't move this tile, try a different one");
	}
	
	if (winner())
	{
		alert("【☆】★【☆】★【☆】★【☆】★【☆】 Good job You won. 【☆】★【☆】★【☆】★【☆】★【☆】, it took " +moves + "moves");
		startGame();
	}
}


function tileCheck (rowCoordinate, columnCoordinate, direction)
{
	
}

function winner ()
{
	var count = 1;
		for( va i = 0; i<rows; i++)
		{
			for (var j = 0; j <columns; j++)
			{
				if(boardArray[i][j] != count)
				{
					if( !(count == rows + columns && boardArray[i][j] == 0))
					{
						return false;
					}
				}
				count++;
			}
		}
		return true;
}

function countMoves ()
{
	moves++; 
	if(textmoves)
	{
		textmoves.innerHTML = moves;
	}
}
window.addEventListener( "load", start, false );
	
	
			
			
