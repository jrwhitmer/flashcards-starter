class Turn {
    count;
    player;
    card;
    guess;
    correct;

    constructor(player, card) {
        this.count = 0;
        this.player = player;
        this.card = card;
        this.guess = null;
        this.correct = null;
    }
}

function takeTurn(guess, correctAnswer) {
    Turn.count++;
    Turn.guess = guess;
    Turn.correct = evaluateGuess(guess, correctAnswer);
    return Turn.correct;
}

function evaluateGuess(guess, correctAnswer) {
    if(guess === correctAnswer) {
        return 'correct!';
    } else {
        return 'incorrect!';
    }
}

module.exports = { takeTurn, Turn };