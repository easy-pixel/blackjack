const cards = ["Ace",2,3,4,5,6,7,8,9,10,"Jack","Queen","King"] //possible cards
const suits = ['♥', '♦', '♠', '♣'];
let firstCard = cards[Math.floor(Math.random() * cards.length)]; //selects random card from cards array
let secondCard = cards[Math.floor(Math.random() * cards.length)]; //selects random card from cards array
if (firstCard === secondCard && firstCard === "Ace"){
    firstCard = cards[Math.floor(Math.random() * cards.length)];
}

let playerCards = [firstCard, secondCard]; //defines selected cards in an array
let blackJack = false; 
let inGame = false;
//HTML links
let userMessage = document.getElementById("use-message");
let userCards = document.getElementById("cards");
let userCardSum = document.getElementById("sum");
let startBtn = document.getElementById("start_btn")
let click = button.addEventListener('click', renderGame)

//render the game
function renderGame() {
    inGame = true;
    userCards.textContent = "Card Values: "; //display cards
    //change string values to number values (ie Jack = 10)
    for (i=0; i<playerCards.length; i++) {
        switch (playerCards[i]) {
            case "Jack":
                playerCards[i]=10;
                break;
            case "Queen":
                playerCards[i]=10;
                break;
            case "King":
                playerCards[i]=10;
                break;
            case "Ace":
                toggleAcePop();
                break;
        }
        userCards.textContent += playerCards[i] + ", "; //add additional cards to hand
        sum = playerCards.reduce((a, b) => a + b); //define sum as all cards in hand(global)
        userCardSum.textContent = "Card Sum: " + sum; //display card sum
    }

    let message = "";
    // rules of blackjack
    if (sum < 21) {
        message = "Do you want another card?";
    } else if (sum === 21) {
        message = "You got blackjack!";
        blackJack = true;
        startBtn.textContent = "New Game";
    } else {
        message = "You lose";
        inGame = false;
        startBtn.textContent = "New Game";
    }
    userMessage.textContent = message; //display message

    if (startBtn.textContent == "New Game" && click) {
        playerCards = [firstCard, secondCard]
        renderGame();
    }
}

//draws a new card
function newCard() {
    if (blackJack == false && inGame == true) {
        let drawnCard = cards[Math.floor(Math.random() * cards.length)];
        playerCards.push(drawnCard); //push new card to player's cards
        sum += drawnCard; //add new card value to sum
        renderGame(); //rerender game
    }
}

//open popup to choose ace value
function toggleAcePop() {
    document.getElementById("ace-popup").classList.toggle("active")
}

//chooses ace value of 1
function closePop1() {
    playerCards[playerCards.indexOf("Ace")]=1;
    renderGame();
    toggleAcePop();
}

//chooses ace value of 11
function closePop11() {
    playerCards[playerCards.indexOf("Ace")]=11;
    renderGame();
    toggleAcePop();
}

function hold() {
    if (blackJack == false && inGame == true) {
        
    }
}
