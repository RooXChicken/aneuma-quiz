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

const answerContainers = 
    [document.getElementById("answerContainer0"), 
    document.getElementById("answerContainer1"), 
    document.getElementById("answerContainer2"), 
    document.getElementById("answerContainer3")];

const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

const progressLabel = document.getElementById("progressLabel");
const questionLabel = document.getElementById("questionLabel");

// thank you to https://dadroit.com/json-to-string/ for saving me the effort of doing this myself :D
const data = JSON.parse("{\"questionCount\": 15,\"question0\": [3, \"When tackling a task, do you prefer to:\", {\"answer\": \"Work as a team\", \"piranha\":3, \"lion\": 2, \"wolf\": 3}, {\"answer\": \"Work by yourself\", \"kiwi\": 2, \"raven\": 2, \"badger\": 2, \"beaver\": 2, \"cat\": 3}, {\"answer\": \"It depends\", \"owl\": 1, \"fox\": 1, \"deer\": 1, \"otter\": 1, \"dove\": 1, \"horse\": 1}],\"question1\": [3, \"When working within a group, do you prefer to:\", {\"answer\": \"Take charge\", \"owl\": 1, \"piranha\": 2, \"badger\": 2, \"beaver\": 2, \"lion\": 3, \"wolf\": 3}, {\"answer\": \"Let others make the decisions\", \"kiwi\": 1, \"deer\": 3, \"otter\": 3, \"dove\": 3}, {\"answer\": \"It depends\", \"raven\": 1, \"cat\": 2, \"fox\": 2, \"horse\": 1}],\"question2\": [3, \"When faced with a problem, do you:\", {\"answer\": \"Trust your instincts\", \"kiwi\": 3, \"raven\": 2, \"owl\": 1, \"badger\": 2, \"cat\": 3, \"fox\": 2, \"dove\": 1, \"horse\": 2}, {\"answer\": \"Use logic and facts to determine the best outcome\", \"beaver\": 2, \"piranha\": 2}, {\"answer\": \"Look to others for guidance\", \"wolf\": 1, \"deer\": 2, \"otter\": 2}],\"question3\": [3, \"Do you tend to embrace change, or prefer stability:\", {\"answer\": \"Change\", \"kiwi\": 3, \"raven\": 3, \"piranha\": 2, \"beaver\": 2, \"cat\": 3, \"fox\": 3}, {\"answer\": \"Stability\", \"lion\": 1, \"wolf\": 1, \"deer\": 1}, {\"answer\": \"It depends\", \"badger\": 2, \"otter\": 1, \"dove\": 1, \"horse\": 1, \"owl\": 1}],\"question4\": [4, \"If your friend is struggling with a problem, do you:\", {\"answer\": \"Let them figure it out\", \"piranha\": 3, \"raven\": 1}, {\"answer\": \"Feel worried for them\", \"deer\": 3, \"dove\": 2, \"kiwi\": 1}, {\"answer\": \"Give them solutions to try and help\", \"horse\": 1, \"fox\": 2, \"lion\": 1, \"beaver\": 2, \"owl\": 1}, {\"answer\": \"Offer to help in whatever way they need\", \"otter\": 1, \"wolf\": 2, \"cat\": 1, \"badger\": 2}],\"question5\": [3, \"If you had a day off, would you:\", {\"answer\": \"Do nothing (you deserve a break)\", \"cat\": 1, \"otter\": 3, \"horse\": 2, \"dove\": 1, \"deer\": 1}, {\"answer\": \"Use the time to peruse your other goals / hobbies\", \"raven\": 1, \"piranha\": 3, \"badger\": 2, \"beaver\": 3}, {\"answer\": \"It depends\", \"kiwi\": 1, \"owl\": 1, \"lion\": 1, \"fox\": 1, \"wolf\": 3}],\"question6\": [3, \"Do you prefer to express any feelings or concerns to others, or keep your thoughts to yourself?\", {\"answer\": \"Express your feelings\", \"dove\": 3, \"deer\": 3, \"kiwi\": 2}, {\"answer\": \"Keep your feelings to yourself\", \"cat\": 1, \"wolf\": 1, \"beaver\": 2, \"badger\": 3, \"piranha\": 3, \"raven\": 2}, {\"answer\": \"It depends\", \"horse\": 1, \"otter\": 1, \"fox\": 1, \"lion\": 1, \"owl\": 1}],\"question7\": [3, \"When problem solving, do you tend to make up your own solutions, or research the best course of action?\", {\"answer\": \"Come up with your own solutions\", \"kiwi\": 2, \"raven\": 2, \"cat\": 2, \"fox\": 3, \"otter\": 2}, {\"answer\": \"Research\", \"badger\": 1, \"beaver\": 2, \"lion\": 1}, {\"answer\": \"A bit of both\", \"owl\": 2, \"piranha\": 2, \"wolf\": 1, \"horse\": 1, \"dove\": 1, \"deer\": 1}],\"question8\": [3, \"If you hear someone arguing about something, do you give them privacy, or listen closer?\", {\"answer\": \"Give them privacy\", \"wolf\": 1, \"lion\": 1, \"beaver\": 2, \"piranha\": 1}, {\"answer\": \"Listen closer\", \"otter\": 1, \"fox\": 3, \"cat\": 3, \"kiwi\": 3, \"raven\": 1}, {\"answer\": \"It depends\", \"horse\": 1, \"dove\": 1, \"deer\": 1, \"badger\": 1, \"owl\": 1}],\"question9\": [3, \"When problem solving, can you come up with solutions quickly or does it take you a bit of time?\", {\"answer\": \"Can come up with solutions quickly\", \"raven\": 2, \"owl\": 2, \"cat\": 2, \"lion\": 1, \"fox\": 3}, {\"answer\": \"It takes you a bit of time\", \"beaver\": 1, \"deer\": 1, \"otter\": 2, \"dove\": 1}, {\"answer\": \"It depends\", \"piranha\": 1, \"badger\": 1, \"wolf\": 1, \"horse\": 1, \"kiwi\": 1}],\"question10\": [4, \"If someone asks for your opinion, do you:\", {\"answer\": \"Tell them the truth in a way that won’t hurt their feelings\", \"kiwi\": 2, \"owl\": 1, \"badger\": 3, \"otter\": 1}, {\"answer\": \"Lie to make them feel better\", \"raven\": 1, \"fox\": 1}, {\"answer\": \"Tell them the truth only if it won’t hurt their feelings\", \"dove\": 2, \"deer\": 3, \"cat\": 1, \"horse\": 1}, {\"answer\": \"Tell them the truth regardless of whether it will hurt their feelings\", \"piranha\": 3, \"lion\": 1, \"wolf\": 1, \"beaver\": 2}],\"question11\": [3, \"Do you see yourself as an introvert or an extrovert?\", {\"answer\": \"Introvert\", \"kiwi\": 2, \"raven\": 1, \"beaver\": 1, \"deer\": 2, \"dove\": 2, \"cat\": 3}, {\"answer\": \"Extrovert\", \"lion\": 2, \"badger\": 1, \"wolf\": 2, \"otter\": 3, \"horse\": 3}, {\"answer\": \"It depends\", \"owl\": 1, \"piranha\": 1, \"fox\": 2}],\"question12\": [3, \"Do you like following trends, or doing your own thing?\", {\"answer\": \"Following trends\", \"deer\": 1}, {\"answer\": \"Doing your own thing\", \"kiwi\": 3, \"piranha\": 1, \"badger\": 2, \"lion\": 1, \"cat\": 3, \"fox\": 1, \"otter\": 1, \"horse\": 1, \"dove\": 1}, {\"answer\": \"It depends\", \"raven\": 1, \"owl\": 1, \"beaver\": 1, \"wolf\": 2}],\"question13\": [3, \"Do you feel comfortable enough being your true self, or do you hide behind what you think others want to see?\", {\"answer\": \"Feel comfortable being yourself\", \"raven\": 2, \"beaver\": 1, \"lion\": 1, \"wolf\": 1, \"cat\": 2, \"horse\": 1, \"dove\": 1, \"otter\": 2}, {\"answer\": \"Hide your true self\", \"fox\": 1, \"piranha\": 1, \"badger\": 1}, {\"answer\": \"It depends\", \"kiwi\": 3, \"owl\": 1, \"deer\": 1}],\"question14\": [4, \"When leading a group, do you try to take into account everyone’s wants, or do you go with what you think is the best for the situation?\", {\"answer\": \"Take into account everyone’s wants\", \"deer\": 3, \"kiwi\": 1}, {\"answer\": \"Do what is best for / ideal for the situation\", \"beaver\": 1, \"badger\": 1, \"piranha\": 1}, {\"answer\": \"I try to do both, but ultimately give into appeasing people’s wants\", \"otter\": 1, \"fox\": 1, \"owl\": 1}, {\"answer\": \"I try to do both, but ultimately lean more towards what is best for the situation\", \"horse\": 1, \"dove\": 1, \"cat\": 1, \"wolf\": 2, \"lion\": 2, \"raven\": 1}]\n}");
const answerCount = data["questionCount"];

let answers = [];
let points;
let _answerIndex = 0;

function onLoad() {
    for(let i = 0; i < answerCount; i++) {
        answers[i] = -1;
    }

    for(let i = 0; i < 4; i++) {
        answerButtons[i].oninput = checkCanSubmit;
    }
    
    resetStatus();
    initializePoints();

    changeAnswers(data[getAnswers(0)]);
}

function initializePoints() {
    points = { "piranha": 0, "lion": 0, "wolf": 0, "kiwi": 0, "raven": 0, "badger": 0, "beaver": 0, "cat": 0, "owl": 0, "fox": 0, "deer": 0, "otter": 0, "dove": 0, "horse": 0 };
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
    initializePoints();

    for(let i = 0; i < answerCount; i++) {
        let _data = data[getAnswers(i)][2 + answers[i]];
        for(let _value in _data) {
            if(_value == "answer") {
                continue;
            }

            points[_value] += _data[_value];
        }
    }
    
    let _highestAnimal = "";
    let _highestPoints = -1;

    for(let _animal in points) {
        if(points[_animal] > _highestPoints) {
            _highestAnimal = _animal;
            _highestPoints = points[_animal];
        }
    }

    window.location.href = `pages/results/index.html?aneuma=${_highestAnimal}`;
}

function changeAnswers(_answerArray) {
    for(let i = 2; i < _answerArray[0]+2; i++) {
        answerLabels[i-2].innerText = _answerArray[i].answer;
    }

    for(let i = _answerArray[0]; i < 4; i++) {
        answerContainers[i].style.display = "none";
    }

    for(let i = 0; i < _answerArray[0]; i++) {
        answerContainers[i].style.display = "";
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