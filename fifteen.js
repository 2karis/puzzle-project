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
			
			
