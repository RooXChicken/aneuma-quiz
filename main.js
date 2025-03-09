const questionButtons = 
    [document.getElementById("question1"), 
    document.getElementById("question2"), 
    document.getElementById("question3"), 
    document.getElementById("question4")];

const questionLabels = 
    [document.getElementById("question1Label"), 
    document.getElementById("question2Label"), 
    document.getElementById("question3Label"), 
    document.getElementById("question4Label")];

const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

const data = JSON.parse("{ \"questionCount\": 3, \"question0\": [\"This\", \"is\", \"a\", \"test\"], \"question1\": [\"Red\", \"Blue\", \"Green\", \"Yellow\"], \"question2\": [\"1\", \"2\", \"3\", \"4\"]}");
const questionCount = data["questionCount"];

let answers = [];
let _questionIndex = 0;

function onLoad() {
    for(let i = 0; i < questionCount; i++) {
        answers[i] = -1;
    }
    
    resetStatus();
    changeQuestions(data[getQuestions(0)]);
}

function getQuestions(_index) {
    return "question" + _index;
}

function previous() {
    if(_questionIndex <= 0) {
        return;
    }

    changeQuestions(data[getQuestions(_questionIndex-1)]);
    _questionIndex--;

    resetStatus();
}

function next() {
    if(_questionIndex >= questionCount-1) {
        submit();
        return;
    }

    changeQuestions(data[getQuestions(_questionIndex+1)]);
    _questionIndex++;

    resetStatus();
}

function submit() {
    checkAnswer();

    for(let i = 0; i < questionCount; i++) {
        // console.log(data[getQuestions(i)][answers[i]]);
    }
}

function changeQuestions(_questionArray) {
    checkAnswer();

    for(let i = 0; i < 4; i++) {
        questionLabels[i].innerText = _questionArray[i];
    }
}

function checkAnswer() {
    for(let i = 0; i < 4; i++) {
        if(questionButtons[i].checked) {
            answers[_questionIndex] = i;
        }
    }
}

function resetStatus() {
    for(let i = 0; i < 4; i++) {
        questionButtons[i].checked = (i == answers[_questionIndex]);
    }

    previousButton.disabled = (_questionIndex == 0);
    nextButton.innerText = (_questionIndex < questionCount-1) ? "Next" : "Submit";
}