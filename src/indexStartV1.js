// start with these global variables
var xIsNext = "X";
var winner = null;
var squares = Array(9).fill(null);
var winningLine = Array();
var lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];

function init()
{
    // Add an onclick handler to all of the squares
    // The name attribute for all of the divs is square
    // Use the function handleClick to handle the event 

       // document.getElementsByName("square").onclick= handleClick;
    let mySquare = document.getElementsByName("square");
    for(let i=0; i<squares.length;i++){
        mySquare[i].onclick=handleClick;
    }
}
    function handleClick(event) {
        //this event is not explicit in its calling, it is only used inside of this function
        //we can refer to the event  and the object by using event.target.id

    //this is the event. 
        // Get the id from the square and put it in a variable
        // Remember that the id is an integer 0 - 8
    let clicked_ID =event.target.id
        // Set the element in the squares array to the player's symbol
    squares[clicked_ID]=xIsNext;
    // Update the inner html for this square in the UI
    document.getElementById(clicked_ID).innerHTML=xIsNext;

        // Set the onclick handler for this square in the UI to an empty anonymous function or arrow function
        event.target.onclick=()=>{};

    
        
        // If calculateWinner returns true
        if (calculateWinner()){
            // highlight the winner and disable all of the squares 
            highlightWinner();
            disableAll();
        }
        // otherwise update the status in the UI to display the player
        else
        { 
            if(xIsNext=="X")
            {
                document.getElementById("status").innerHTML="Next Player: O";
            }
            else
            {
                document.getElementById("status").innerHTML="Next Player: X";
            }

        }

        
        // Update the variable xIsNext
        if(xIsNext=="O")
        {
            xIsNext="X";

        }
        else {xIsNext="O";}
            

    // document.getElementById("status").innerhtml=xIsNext;
    }
   


function calculateWinner() {
    for (var i = 0; i < lines.length; i++) {
        var a = lines[i][0];
        var b = lines[i][1];
        var c = lines[i][2];       
        if (squares[a] && 
        squares[a] === squares[b] && 
        squares[a] === squares[c]) {
            winner = squares[a];
            winningLine = lines[i];
            return true;
        }
    }
    winner = null;
    winningLine = Array();
    return false;
}

//
function highlightWinner() {
    let mySquare = document.getElementsByName("square");
    var totalx=0;
    var totaly=0;
    var winner="";
    totalnull=0;
    for(var i=0;i<squares.length;i++){
        if (squares[i]=="X"){
            totalx+=1;;
        }
        else if(squares[i]=="O")
        {
            totaly+=1;;
        }
        else{
            totalnull+=1;
            
        }
    }
    // Update the status in the UI to display the winner
    if(totalx>totaly){
        winner="X";
    }
    else if(totaly>totalx){
        winner="O"
    }
    else {
        winner="O";
    }
    document.getElementById("status").innerHTML=winner+" is the winner";
    // Iterate through the winningLine array.  It contains the indices of the winning squares
    //since squares only holds the number of x or y in a given game it safe to say that we will be using mysquare which 
    //has been  populated by squares in init. 
    // the winning line contains all of the squares. //my guess is those values contain the numerical id associated with those squares. 
    //we will use a nested for loop to iterate through winningline, 
   //classlist.add will add the class to the element, had this before but did not store it in a variable. this makes a difference.
   //winning line is stored with just plain numbers even though it looks like a string in debugger. ie: 0:0
    for(var i=0;i<winningLine.length;i++){
       winnerStreak= document.getElementById(winningLine[i])
        winnerStreak.classList.add("red");
         }  
    
    //      get the next square using the current index in the winningLine array as the id
    //      add the class red to the square
    // Disable all of the squares
    disableAll();
}



function disableAll() {
   
    //for(var i=0;i<squares.length;i++){
      //  mySquare[i].onclick=()=>{};
    //}

    let mySquare = document.getElementsByName("square");
    for(let i=0; i<mySquare.length;i++){
        mySquare[i].onclick= ()=>{};
    }
   

    // Set the onclick handler for all squares to function that does nothing
    // The id of the square is a number 0 - 8
}
window.onload=init;

// When the page has finished loading, call the function init
//dont forget to at the end reset all arrays.    