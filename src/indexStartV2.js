// Create a class called TTT
{
    /*
        Add a constructor that 
        -   defines and initializes all variables
        -   binds the keyword this to the class for each function because
            this will otherwise will refer to the clicked square
            -   this.calculateWinner = this.calculateWinner.bind(this);
            -   DON'T bind this for handleClick at this point
        -   calls the init method
    */
    class TTT {
        constructor() {
            // start with these global variables
            this.xIsNext = "X";
            this.winner = null;
            this.squares = Array(9).fill(null);
            this.winningLine = Array();
            this.lines = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
            ];
            this.calculateWinner = this.calculateWinner.bind(this);
            this.highlightWinner = this.highlightWinner.bind(this);
            this.disableAll = this.disableAll.bind(this);
            this.init = this.init.bind(this);
            this.init();
        }

        init() {

            let mySquare = document.getElementsByName("square");
            for (let i = 0; i < this.squares.length; i++) {
                mySquare[i].onclick = this.handleClick.bind(this, i);
            }
        }
        handleClick(i) {
            //so confused. 



            let clicked = document.getElementById(i)
            this.squares[i] = this.xIsNext;
            clicked.innerHTML = this.xIsNext;
            //event.target.onclick=()=>{};
            clicked.onclick = () => {};

            if (this.calculateWinner()) {

                this.highlightWinner();
                this.disableAll();
            } else {
                if (this.xIsNext == "X") {
                    document.getElementById("status").innerHTML = "Next Player: O";
                } else {
                    document.getElementById("status").innerHTML = "Next Player: X";
                }

            }
            if (this.xIsNext == "O") {
                this.xIsNext = "X";

            } else {
                this.xIsNext = "O";
            }
        }

        calculateWinner() {
            for (let i = 0; i < this.lines.length; i++) {
                let a = this.lines[i][0];
                let b = this.lines[i][1];
                let c = this.lines[i][2];
                if (this.squares[a] &&
                    this.squares[a] === this.squares[b] &&
                    this.squares[a] === this.squares[c]) {
                    this.winner = this.squares[a];
                    this.winningLine = this.lines[i];
                    return true;
                }
            }
            this.winner = null;
            this.winningLine = Array();
            return false;
        }

        //
        highlightWinner() {
            let mySquare = document.getElementsByName("square");
            this.totalx = 0;
            this.totaly = 0;
            this.winner = "";
            this.totalnull = 0;
            for (var i = 0; i < this.squares.length; i++) {
                if (this.squares[i] == "X") {
                    this.totalx += 1;;
                } else if (this.squares[i] == "O") {
                    this.totaly += 1;;
                } else {
                    this.totalnull += 1;

                }
            }

            if (this.totalx > this.totaly) {
                this.winner = "X";
            } else if (this.totaly > this.totalx) {
                this.winner = "O"
            } else {
                this.winner = "O";
            }
            document.getElementById("status").innerHTML = this.winner + " is the winner";

            for (let i = 0; i < this.winningLine.length; i++) {
                this.winnerStreak = document.getElementById(this.winningLine[i])
                this.winnerStreak.classList.add("red");
            }


            this.disableAll();
        }

        disableAll() {

            let mySquare = document.getElementsByName("square");
            for (let i = 0; i < mySquare.length; i++) {
                mySquare[i].onclick = () => {};
            }
        }


    }
    let ttt;
    window.onload = () => {
        ttt = new TTT();
    }


    /*
        Convert each function to a method
        -   move it inside the class
        -   remove the keyword function
        -   add this to all of the variables that belong to the class
        -   change var to let or const for local variables
        -   add this to all method calls
     
        Init
        -   bind both this and i to handleClick
            -   this.handleClick.bind(this, i);

        CalculateWinner
        -   use destructuring assingment to assign values to
            a b and c in one line

        HandleClick
        -   add a parameter i rather than getting i from this
            -   this now refers to the class not the square
        -   remove the local variable i
        -   add a local variable to refer to the clicked square
            -   remember that squares have an integer id 0 - 8
    */



}

// declare a variable ttt

// add an onload handler to the window that assigns ttt to a TTT