let correctAnswers = [];

let answers = ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'D'];

let question1 = prompt("Question 1: What is the capital of France?\nA) Paris\nB) Madrid\nC) Berlin\nD) Rome\nEnter the letter of your answer: ");
let question2 = prompt("Question 2: Who wrote 'War and Peace'?\nA) Leo Tolstoy\nB) Fyodor Dostoevsky\nC) Anton Chekhov\nD) Ivan Turgenev\nEnter the letter of your answer: ");
let question3 = prompt("Question 3: Who painted the Mona Lisa?\nA) Leonardo da Vinci\nB) Michelangelo\nC) Raphael\nD) Titian\nEnter the letter of your answer: ");
let question4 = prompt("Question 4: What is the currency used in Japan?\nA) Yen\nB) Dollar\nC) Euro\nD) Pound\nEnter the letter of your answer: ");
let question5 = prompt("Question 5: Who discovered America?\nA) Christopher Columbus\nB) Vasco da Gama\nC) Ferdinand Magellan\nD) Juan Ponce de León\nEnter the letter of your answer: ");
let question6 = prompt("Question 6: Who wrote the novel 'Pride and Prejudice'?\nA) Jane Austen\nB) Charlotte Bronte\nC) Emily Bronte\nD) Mary Shelley\nEnter the letter of your answer: ");
let question7 = prompt("Question 7: What is the highest mountain in the world?\nA) Mount Kilimanjaro\nB) Mount Everest\nC) Mount Denali\nD) Mount Aconcagua\nEnter the letter of your answer: ");
let question8 = prompt("Question 8: Who composed the opera 'The Barber of Seville'?\nA) Wolfgang Amadeus Mozart\nB) Ludwig van Beethoven\nC) Giuseppe Verdi\nD) Gioachino Rossini\nEnter the letter of your answer: ");

if (question1 === answers[0]) {
    correctAnswers.push(question1);
}

if (question2 === answers[1]) {
    correctAnswers.push(question2);
}

if (question3 === answers[2]) {
    correctAnswers.push(question3);
}

if (question4 === answers[3]) {
    correctAnswers.push(question4);
}

if (question5 === answers[4]) {
    correctAnswers.push(question5);
}

if (question6 === answers[5]) {
    correctAnswers.push(question6);
}

if (question7 === answers[6]) {
    correctAnswers.push(question7);
}

if (question8 === answers[7]) {
    correctAnswers.push(question8);
}

console.log("Correct answers: " + correctAnswers.length + "/8");

