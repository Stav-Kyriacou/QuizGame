
var quiz = {
    questions: [],
    unsortedQuestions: [],
    questionSequence: [0, 1, 2, 3, 4, 5],
    questionNumber: 0,
    questionID: 0,
    answerSequence: [0, 1, 2, 3],
    answers: [0, 0, 0, 0, 0, 0]
};

//CACHE ELEMENTS

//text fields
var questionText = document.getElementById("questionText");
var questionNumText = document.getElementById("questionID");
var userAnswerText = document.getElementById("userAnswer");

//radio button labels
var answerLabel1 = document.getElementById("answer1");
var answerLabel2 = document.getElementById("answer2");
var answerLabel3 = document.getElementById("answer3");
var answerLabel4 = document.getElementById("answer4");

//randomise question sequence
for (let i = quiz.questionSequence.length - 1; i > -1; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = quiz.questionSequence[i];
    quiz.questionSequence[i] = quiz.questionSequence[j];
    quiz.questionSequence[j] = temp;
}

//randomise answer sequence
for (let i = quiz.answerSequence.length - 1; i > -1; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = quiz.answerSequence[i];
    quiz.answerSequence[i] = quiz.answerSequence[j];
    quiz.answerSequence[j] = temp;
}

//questions before being randomised
quiz.unsortedQuestions[0] = "What is my name?";
quiz.unsortedQuestions[1] = "What is your name?";
quiz.unsortedQuestions[2] = "How many days in the week?";
quiz.unsortedQuestions[3] = "How many seconds in a minute?";
quiz.unsortedQuestions[4] = "How big is the earth?";
quiz.unsortedQuestions[5] = "Why?";

var sequence = quiz.questionSequence;

//questions after being randomised
quiz.questions[sequence[0]] = "What is my name?";
quiz.questions[sequence[1]] = "What is your name?";
quiz.questions[sequence[2]] = "How many days in the week?";
quiz.questions[sequence[3]] = "How many seconds in a minute?";
quiz.questions[sequence[4]] = "How big is the earth?";
quiz.questions[sequence[5]] = "Why?";



quiz.questionID = quiz.unsortedQuestions.indexOf(quiz.questions[quiz.questionNumber]);

questionText.innerHTML = quiz.questions[quiz.questionNumber] + " Question ID: " + quiz.questionID;
questionNumText.innerHTML = "Question: " + (quiz.questionNumber + 1);


//--------------ANSWERS-----------------
var q1Answers = [];
q1Answers[0] = "Meme";
q1Answers[1] = "Base";
q1Answers[2] = "Bibius";
q1Answers[3] = "Maximus";

var q2Answers = [];
q2Answers[0] = "Meme";
q2Answers[1] = "Base";
q2Answers[2] = "Bibius";
q2Answers[3] = "Maximus";

var q3Answers = [];
q3Answers[0] = "1";
q3Answers[1] = "2";
q3Answers[2] = "3";
q3Answers[3] = "4";

var q4Answers = [];
q4Answers[0] = "5";
q4Answers[1] = "6";
q4Answers[2] = "7";
q4Answers[3] = "8";

var q5Answers = [];
q5Answers[0] = "Big";
q5Answers[1] = "Bigger";
q5Answers[2] = "BIggest";
q5Answers[3] = "Biggestest";

var q6Answers = [];
q6Answers[0] = "a";
q6Answers[1] = "b";
q6Answers[2] = "c";
q6Answers[3] = "d";

var answerSet = [];

switch (quiz.questionID) {
    case 0:
        answerSet = q1Answers;
        break;
    case 1:
        answerSet = q2Answers;
        break;
    case 2:
        answerSet = q3Answers;
        break;
    case 3:
        answerSet = q4Answers;
        break;
    case 4:
        answerSet = q5Answers;
        break;
    case 5:
        answerSet = q6Answers;
        break;
    default:
        break;
}

answerLabel1.innerHTML = answerSet[quiz.answerSequence[0]];
answerLabel2.innerHTML = answerSet[quiz.answerSequence[1]];
answerLabel3.innerHTML = answerSet[quiz.answerSequence[2]];
answerLabel4.innerHTML = answerSet[quiz.answerSequence[3]];

function GetAnswer() {
    var answer = document.getElementsByName("answer");
    var value;
    for (i = 0; i < answer.length; i++) {
        if (answer[i].checked) {
            userAnswerText.innerHTML = "Your answer: " + answer[i].value;
            value = parseInt(answer[i].value);
        }
    }
    
    if (value == quiz.answers[quiz.questionID])
    {
        alert("Value: " + value + " | Quiz answers: " + quiz.answers[quiz.questionID] + " Correct");
    }
    else
    {
        alert("Value: " + value + " | Quiz answers: " + quiz.answers[quiz.questionID] + " Incorrect");
    }
    
    

}

