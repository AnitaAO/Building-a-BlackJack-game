//2. create the player object. Give it two keys, name and chips,
let player = {
  name: "Anita",
  chips: 200
}

let cards = [];
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");
//3. grab a hold of the player-el paragraph and store it in a variable
let playerEl = document.getElementById("player-el")

//4. render the player's name and chips to playerEl
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  //make this function return a random number between 1 and 13
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  //if 1 -> return 11
  //if 11 - 13 -> return 10
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  //generate two random numbers
  //re-assign the cards and sum variables
  //so that the game can start
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  //create a for loop that renders out all the cards instead of just two
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  // only allow the player to get a new card if she IS alive and NOT have BlackJack
  if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
}