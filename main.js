const answerButtons = 
    [document.getElementById("answer1"), 
    document.getElementById("answer2"), 
    document.getElementById("answer3"), 
    document.getElementById("answer4")];

const answerLabels = 
    [document.getElementById("answer1Label"), 
    document.getElementById("answer2Label"), 
    document.getElementById("answer3Label"), 
    document.getElementById("answer4Label")];

const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

const questionLabel = document.getElementById("questionLabel");

const data = JSON.parse("{ \"questionCount\": 3, \"question0\": [\"This\", \"is\", \"a\", \"test\", \"What is this?\"], \"question1\": [\"Red\", \"Blue\", \"Green\", \"Yellow\", \"What is your favorite color?\"], \"question2\": [\"1\", \"2\", \"3\", \"4\", \"Pick a number\"]}");
const answerCount = data["questionCount"];

let answers = [];
let _answerIndex = 0;

function onLoad() {
    for(let i = 0; i < answerCount; i++) {
        answers[i] = -1;
    }
    
    resetStatus();
    changeAnswers(data[getAnswers(0)]);
}

function getAnswers(_index) {
    return "question" + _index;
}

function previous() {
    if(_answerIndex <= 0) {
        return;
    }

    changeAnswers(data[getAnswers(_answerIndex-1)]);
    _answerIndex--;

    resetStatus();
}

function next() {
    if(_answerIndex >= answerCount-1) {
        submit();
        return;
    }

    changeAnswers(data[getAnswers(_answerIndex+1)]);
    _answerIndex++;

    resetStatus();
}

function submit() {
    checkAnswer();

    for(let i = 0; i < answerCount; i++) {
        // console.log(data[getAnswers(i)][answers[i]]);
    }
}

function changeAnswers(_answerArray) {
    checkAnswer();

    for(let i = 0; i < 4; i++) {
        answerLabels[i].innerText = _answerArray[i];
    }

    questionLabel.innerText = _answerArray[4];
}

function checkAnswer() {
    for(let i = 0; i < 4; i++) {
        if(answerButtons[i].checked) {
            answers[_answerIndex] = i;
        }
    }
}

function resetStatus() {
    for(let i = 0; i < 4; i++) {
        answerButtons[i].checked = (i == answers[_answerIndex]);
    }

    previousButton.disabled = (_answerIndex == 0);
    nextButton.innerText = (_answerIndex < answerCount-1) ? "Next" : "Submit";
}