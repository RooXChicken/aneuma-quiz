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

const progressLabel = document.getElementById("progressLabel");
const questionLabel = document.getElementById("questionLabel");

const data = JSON.parse("{\"questionCount\": 15,\"question0\": [3, \"When tackling a task, do you prefer to:\", {\"answer\": \"Work as a team\"}, {\"answer\": \"Work by yourself\"}, {\"answer\": \"It depends\"}],\"question1\": [3, \"When working within a group, do you prefer to:\", {\"answer\": \"Take charge\"}, {\"answer\": \"Let others make the decisions\"}, {\"answer\": \"It depends\"}],\"question2\": [3, \"When faced with a problem, do you:\", {\"answer\": \"Trust your instincts\"}, {\"answer\": \"Use logic and facts to determine the best outcome\"}, {\"answer\": \"Look to others for guidance\"}],\"question3\": [3, \"Do you tend to embrace change, or prefer stability:\", {\"answer\": \"Change\"}, {\"answer\": \"Stability\"}, {\"answer\": \"It depends\"}],\"question4\": [4, \"If your friend is struggling with a problem, do you:\", {\"answer\": \"Let them figure it out\"}, {\"answer\": \"Feel worried for them\"}, {\"answer\": \"Give them solutions to try and help\"}, {\"answer\": \"Offer to help in whatever way they need\"}],\"question5\": [3, \"If you had a day off, would you:\", {\"answer\": \"Do nothing\"}, {\"answer\": \"Use the time to peruse your other goals / hobbies\"}, {\"answer\": \"It depends\"}],\"question6\": [3, \"Do you prefer to express any feelings or concerns to others, or keep your thoughts to yourself?\", {\"answer\": \"Express your feelings\"}, {\"answer\": \"Keep your feelings to yourself\"}, {\"answer\": \"It depends\"}],\"question7\": [3, \"When problem solving, do you tend to make up your own solutions, or research the best course of action?\", {\"answer\": \"Come up with your own solutions\"}, {\"answer\": \"Research\"}, {\"answer\": \"A bit of both\"}],\"question8\": [3, \"If you hear someone arguing about something, do you give them privacy, or listen closer?\", {\"answer\": \"Give them privacy\"}, {\"answer\": \"Listen closer\"}, {\"answer\": \"It depends\"}],\"question9\": [3, \"When problem solving, can you come up with solutions quickly or does it take you a bit of time?\", {\"answer\": \"Can come up with solutions quickly\"}, {\"answer\": \"It takes you a bit of time\"}, {\"answer\": \"It depends\"}],\"question10\": [4, \"If someone asks for your opinion, do you:\", {\"answer\": \"Tell them the truth in a way that won’t hurt their feelings\"}, {\"answer\": \"Lie to make them feel better\"}, {\"answer\": \"Tell them the truth only if it won’t hurt their feelings\"}, {\"answer\": \"Tell them the truth regardless of whether it will hurt their feelings\"}],\"question11\": [],\"question12\": [3, \"Do you like following trends, or doing your own thing?\", {\"answer\": \"Following trends\"}, {\"answer\": \"Doing your own thing\"}, {\"answer\": \"It depends\"}],\"question13\": [3, \"Do you feel comfortable enough being your true self, or do you hide behind what you think others want to see?\", {\"answer\": \"Feel comfortable being yourself\"}, {\"answer\": \"Hide your true self\"}, {\"answer\": \"It depends\"}],\"question14\": [4, \"When leading a group, do you try to take into account everyone’s wants, or do you go with what you think is the best for the situation?\", {\"answer\": \"Take into account everyone’s wants\"}, {\"answer\": \"Do what is best for / ideal for the situation\"}, {\"answer\": \"I try to do both, but ultimately give into appeasing people’s wants\"}, {\"answer\": \"I try to do both, but ultimately lean more towards what is best for the situation\"}]\n}");
const answerCount = data["questionCount"];

let answers = [];
let _answerIndex = 0;

function onLoad() {
    for(let i = 0; i < answerCount; i++) {
        answers[i] = -1;
    }

    for(let i = 0; i < 4; i++) {
        answerButtons[i].oninput = checkCanSubmit;
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

function clickBackground(_index) {
    answerButtons[_index].checked = true;
    checkCanSubmit();
}

function submit() {
    for(let i = 0; i < answerCount; i++) {
        // console.log(data[getAnswers(i)][answers[i]]);
    }
}

function changeAnswers(_answerArray) {
    for(let i = 2; i < _answerArray[0]+2; i++) {
        answerLabels[i-2].innerText = _answerArray[i].answer;
    }

    for(let i = _answerArray[0]; i < 4; i++) {
        answerLabels[i].style.display = "none";
        answerButtons[i].style.display = "none";
    }

    for(let i = 0; i < _answerArray[0]; i++) {
        answerLabels[i].style.display = "";
        answerButtons[i].style.display = "";
    }

    questionLabel.innerText = _answerArray[1];
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
    progressLabel.innerText = (_answerIndex+1) + "/" + answerCount;

    checkCanSubmit();
}

function checkCanSubmit() {
    checkAnswer();
    let _final = !(_answerIndex < answerCount-1);

    nextButton.innerText = !_final ? "Next" : "Submit";
    nextButton.disabled = false;

    if(_final) {
        for(let i = 0; i < answerCount; i++) {
            if(answers[i] == -1) {
                nextButton.disabled = true;
                break;
            }
        }
    }

}