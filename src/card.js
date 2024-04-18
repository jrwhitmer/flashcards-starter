class Card {
    id;
    question;
    answers;
    correctAnswer;

    constructor(id, question, possibleAnswers, correctAnswer) {
        this.id = id;
        this.question = question;
        this.answers = possibleAnswers;
        this.correctAnswer = correctAnswer;
    }

}

function createCard(id, question, answers, correctAnswer) {
    return new Card(id, question, answers, correctAnswer)
}

module.exports = { createCard, Card };