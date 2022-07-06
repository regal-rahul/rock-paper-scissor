const move = ['rock', 'raper', 'scissor'];


function computerMove() {
    var number = Math.floor(Math.random()*3);
    var movePlayed = move[number];
    return movePlayed.toUpperCase();
}
function playerMove() {
    var playerinput = prompt("Enter your Move");
    return playerinput.toUpperCase();
}
