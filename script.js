var gameState = false;
var counter = 0;
var timer = 60;
var highScore = 0;
var highScoreList = []
var scoreCard = document.getElementById("end");
var highScores = document.getElementById("highScores");
document.getElementById("submit").addEventListener("click", submitScore());

function hide(){
    document.getElementsByClassName("question")[counter].style.display = "none";
}
function show(){
    document.getElementsByClassName("question")[counter].style.display = "flex";
    highScores.style.display = "none";
}
function increment(){
    if (counter < 6){
        counter++
    }
}
show();
function init(){
    gameState = true; 
    hide();
    increment();
    show();
    var quizTimer = setInterval(function(){
        document.getElementById("timer").innerHTML = timer;
        timer--;
        if(timer <= 0){
            clearInterval(quizTimer);
            document.getElementById("timer").innerHTML = "Out of time";
            alert("You are out of time");
            hide()
            scoreCard.style.display = "flex";
        }
    },1000);
}
function wrongAnswer(){
    timer = timer - 15;
}
function correctAnswer(){
    highScore = highScore + 15;
    hide();
    increment();
    show();
}
function submitScore(){
    console.log ("button click");
    highScoreList.push({
        name: document.getElementById('initials').value,
        score: highScore
    });
    console.log (highScore);
let newScore = document.createElement("p");
    newScore.innerText = `${document.getElementById('initials').value}:${highScore}`;
    document.getElementById("highScores").append(newScore);
    scoreCard.style.display = "none";
    highScores.style.display = "flex";
};
//console.log(highScoreList);
//let newScore = document.createElement("p");
//newScore.innerText = `${document.getElementById('initials').value}:${highScore}`;
//document.getElementById("highScores").append(newScore);
//hide();
//increment();
//show();