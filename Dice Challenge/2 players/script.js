let rollBtn = document.getElementById("rollBtn");
const holdBtn = document.getElementById("holdBtn");
const playerTurn = document.getElementById("playerTurn");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const currentScore1 = document.getElementById("currentScore1");
const totalScore1 = document.getElementById("totalScore1");
const currentScore2 = document.getElementById("currentScore2");
const totalScore2 = document.getElementById("totalScore2");
const buttons = document.getElementById("buttons");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const numbers = [one, two, three, four, five, six];
const values = [1, 2, 3, 4, 5, 6];
let i;
let rand;
let currentValue1 = 0;
let totalValue1 = 0;
let currentValue2 = 0;
let totalValue2 = 0;
let playerIndex = 0;
let rollBtn2;

rollBtn.addEventListener("click", () => {
    rand = Math.floor(Math.random() * 6 + 1);
    for (i = 0; i < 6; i++){
        if (rand == values[i]){
            numbers[i].style.display = "block";
        } else {
            numbers[i].style.display = "none";
        }
    }
    if (totalValue1 >= 20 && totalValue2 < 20) {
        playerTurn.textContent = "Player 1 has won!";
        rollBtn.remove();
        holdBtn.remove();
        const retry = document.createElement("button");
        retry.textContent = "Start again?";
        buttons.appendChild(retry);
        retry.addEventListener("click", () => {
            window.location.reload();
        })
    }
    else if (rand != 1 && totalValue1 < 20) {
        currentValue1 = currentValue1 + rand;
        currentScore1.textContent = `CURRENT ${currentValue1}`;
        playerIndex = 0
        if (totalValue1 + currentValue1 >= 20 ) {
            totalScore1.textContent = `${totalValue1 + currentValue1}`;
            playerTurn.textContent = "Player 1 has won!";
            rollBtn.remove();
            holdBtn.remove();
            const retry = document.createElement("button");
            retry.textContent = "Start again?";
            buttons.appendChild(retry);
            retry.addEventListener("click", () => {
                window.location.reload();
            })
        }
    } 
    else if (rand == 1 && totalValue1 < 20) {
        playerIndex = 1;
        currentValue1 = 0;
        currentScore1.textContent = `CURRENT ${currentValue1}`;
        player1.style.backgroundColor = "orange";
        player2.style.backgroundColor = "white";
        playerTurn.textContent = "Player 2's turn";
        rollBtn2 = document.createElement("button");
        rollBtn2.textContent = "ROLL";
        rollBtn.replaceWith(rollBtn2);
        rollBtn2.addEventListener("click", () => {
            rand = Math.floor(Math.random() * 6 + 1);
            for (i = 0; i < 6; i++){
                if (rand == values[i]){
                    numbers[i].style.display = "block";
                } else {
                    numbers[i].style.display = "none";
                }
            }
            if (totalValue2 >= 20 && totalValue1 < 20) {
                playerTurn.textContent = "Player 2 has won!";
                rollBtn2.remove();
                holdBtn.remove();
                const retry = document.createElement("button");
                retry.textContent = "Start again?";
                buttons.appendChild(retry);
                retry.addEventListener("click", () => {
                    window.location.reload();
                })
            }
            else if (rand != 1 && totalValue2 < 20) {
                currentValue2 = currentValue2 + rand;
                currentScore2.textContent = `CURRENT ${currentValue2}`;
                playerIndex = 1;
                if ((totalValue2 + currentValue2) >= 20 ) {
                    totalScore2.textContent = `${totalValue2 + currentValue2}`;
                    playerTurn.textContent = "Player 2 has won!";
                    rollBtn2.remove();
                    holdBtn.remove();
                    const retry = document.createElement("button");
                    retry.textContent = "Start again?";
                    buttons.appendChild(retry);
                    retry.addEventListener("click", () => {
                        window.location.reload();
                    })
                }
            } 
            else if (rand == 1 && totalValue2 < 20) {
                playerIndex = 0;
                currentValue2 = 0;
                currentScore2.textContent = `CURRENT ${currentValue2}`;
                player1.style.backgroundColor = "white";
                player2.style.backgroundColor = "orange";
                playerTurn.textContent = "Player 1's turn";
                rollBtn2.replaceWith(rollBtn);
            }
        })
    }
})

holdBtn.addEventListener("click", () => {
    if (playerIndex == 0) {
        totalValue1 = currentValue1 + totalValue1;
        totalScore1.textContent = `${totalValue1}`;
        currentValue1 = 0;
        currentScore1.textContent = `CURRENT ${currentValue1}`;
        playerIndex = 1;
        player1.style.backgroundColor = "orange";
        player2.style.backgroundColor = "white";
        playerTurn.textContent = "Player 2's turn";
        rollBtn2 = document.createElement("button");
        rollBtn2.textContent = "ROLL";
        rollBtn.replaceWith(rollBtn2);
        rollBtn2.addEventListener("click", () => {
            rand = Math.floor(Math.random() * 6 + 1);
            for (i = 0; i < 6; i++){
                if (rand == values[i]){
                    numbers[i].style.display = "block";
                } else {
                    numbers[i].style.display = "none";
                }
            }
            if (totalValue2 >= 20 && totalValue1 < 20) {
                playerTurn.textContent = "Player 2 has won!";
                rollBtn2.remove();
                holdBtn.remove();
                const retry = document.createElement("button");
                retry.textContent = "Start again?";
                buttons.appendChild(retry);
                retry.addEventListener("click", () => {
                    window.location.reload();
                })
            }
            else if (rand != 1 && totalValue2 < 20) {
                currentValue2 = currentValue2 + rand;
                currentScore2.textContent = `CURRENT ${currentValue2}`;
                playerIndex = 1;
                if ((totalValue2 + currentValue2) >= 20 ) {
                    totalScore2.textContent = `${totalValue2 + currentValue2}`;
                    playerTurn.textContent = "Player 2 has won!";
                    rollBtn2.remove();
                    holdBtn.remove();
                    const retry = document.createElement("button");
                    retry.textContent = "Start again?";
                    buttons.appendChild(retry);
                    retry.addEventListener("click", () => {
                        window.location.reload();
                    })
                }
            } 
            else if (rand == 1 && totalValue2 < 20) {
                playerIndex = 0;
                currentValue2 = 0;
                currentScore2.textContent = `CURRENT ${currentValue2}`;
                player1.style.backgroundColor = "white";
                player2.style.backgroundColor = "orange";
                playerTurn.textContent = "Player 1's turn";
                rollBtn2.replaceWith(rollBtn);
            }
        })
    }
    else if (playerIndex == 1) {
        totalValue2 = currentValue2 + totalValue2;
        totalScore2.textContent = `${totalValue2}`;
        currentValue2 = 0;
        currentScore2.textContent = `CURRENT ${currentValue2}`;
        playerIndex = 0;
        player1.style.backgroundColor = "white";
        player2.style.backgroundColor = "orange";
        playerTurn.textContent = "Player 1's turn";
        rollBtn2.replaceWith(rollBtn);
    }
})
    
