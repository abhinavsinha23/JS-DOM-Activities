const game = document.getElementById("game");
const score = document.getElementById("score");
const rollBtn = document.getElementById("rollBtn");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const player = document.getElementById("player");
const numbers = [one, two, three, four, five, six];
const values = [1, 2, 3, 4, 5, 6];
let i;
let scoreValue = 0;
let rand;

rollBtn.addEventListener("click", () => {
    rand = Math.floor(Math.random() * 6 + 1);
    console.log(rand);
    for (i = 0; i < 6; i++){
        if (rand == values[i]){
            numbers[i].style.display = "block";
        } else {
            numbers[i].style.display = "none";
        }
    }
    if (rand != 1 && scoreValue < 20) {
        scoreValue = scoreValue + rand;
        score.textContent = scoreValue.toString();
    } 
    else if (rand == 1 && scoreValue < 20) {
        player.textContent = "You lost";
        rollBtn.remove();
        const retry = document.createElement("button");
        retry.textContent = "Start again?";
        game.appendChild(retry);
        retry.addEventListener("click", () => {
            window.location.reload();
        })
    }
    else if (scoreValue >= 20) {
        player.textContent = "You won!";
        rollBtn.remove();
        const retry = document.createElement("button");
        retry.textContent = "Start again?";
        game.appendChild(retry);
        retry.addEventListener("click", () => {
            window.location.reload();
        })
    }
})

