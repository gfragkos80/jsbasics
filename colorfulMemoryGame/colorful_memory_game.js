const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;

// DOM element selection

const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

// 
function generateCards() {
    for (const color of cards) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color;
        card.textContent = '?';
        gameContainer.appendChild(card);
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Creates random index
        const j = Math.floor(Math.random() * (i + 1));
        // Switches elements
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function handleCardClick(event) {
    //get element from event. The event trigger defines the selected card
    const card = event.target;

    //Check if card & already matched
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }
    // set text from color
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;

    selectedCards.push(card);
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    // Decontruct selected cards
    const [card1, card2] = selectedCards;

    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;

    } else { // Unmatch them
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = [];
}

function startGame() {
    let timeLeft = 30;
    startbtn.disabled = true;

    score = 0; // Reset score to zero
    
    scoreElement.textContent = `Score: ${score}`;
    
    startGameTimer(timeLeft);
    
    // Suffle cards
    cards = shuffle(colors.concat(colors));

    selectedCards = [];
    gameContainer.innerHTML = '';
    // Generate Cards divs
    generateCards();
    // Add listener to game container
    gameContainer.addEventListener('click', handleCardClick);
}

function startGameTimer(timeLeft) {

    timerElement.textContent = `Time Left: ${timeLeft}`;
    
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            let timeLeft = 30;
            alert('Game Over!');
            startbtn.disabled = false;
        }
    }, 1000);
}

startbtn.addEventListener('click', startGame);