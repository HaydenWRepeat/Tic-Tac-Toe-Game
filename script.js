let player = "X"
let winArray = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let turn = 1

function winner() {
    if (winArray[0] == winArray[1] && winArray[0] == winArray[2]) {
        return winArray[1];
    } else if (winArray[3] == winArray[4] && winArray[3] == winArray[5]) {
        return winArray[4];
    } else if (winArray[6] == winArray[7] && winArray[6] == winArray[8]) {
        return winArray[7];
    } else if (winArray[0] == winArray[3] && winArray[0] == winArray[6]) {
        return winArray[3];
    } else if (winArray[1] == winArray[4] && winArray[1] == winArray[7]) {
        return winArray[1];
    } else if (winArray[2] == winArray[5] && winArray[2] == winArray[8]) {
        return winArray[2];
    } else if (winArray[0] == winArray[4] && winArray[0] == winArray[8]) {
        return winArray[0];
    } else if (winArray[2] == winArray[4] && winArray[2] == winArray[6]) {
        return winArray[2];
    } else if (turn == 10) {
        return `no one won`;
    } else {
        return "";
    }
    //create a function that will check for the win conndition
    //call the reset functionafter a prompt
}


function TTT(input) {
    //have a check that will not allow you to click on a square that has already been clicked
    if (document.getElementById(input).textContent == "") {
        //have a way for you to know whose turn it is
        if (player == "X") {
            document.getElementById(input).textContent = "X";
            input = input.split("");
            input = input.pop();
            winArray[input] = player;
            player = "O";
        } else {
            document.getElementById(input).textContent = "O";
            input = input.split("");
            input = input.pop();
            winArray[input] = player;
            player = "X";
        }
        //based on the turn then you should place an X or an O on that square
        //keep track of the squares that have been placed using an array

        //change the text inside the box to an x or an o and then increase the turn to the next player's turn
        turn++;
        //update all text fields on the page

        let winningPlayer = winner();
        console.log(`${winningPlayer}`)
        if (winningPlayer != "") {
            alert(`${winningPlayer} Won!`)
        }

        document.getElementById("player").textContent = `Player: ${player}`;
        document.getElementById("turns").textContent = `Turns: ${turn}`;

        console.log(winArray);
        //run the winner function

    }
}


function reset() {
    //create a way to reset the game back to default that will run when the winner is declared and shown to the players
    for(let i = 0; i < 9; i++){
        document.getElementById(`block${i}`).textContent = "";
    }
    turn = 1;
    document.getElementById("turns").textContent = `Turns: ${turn}`;
}