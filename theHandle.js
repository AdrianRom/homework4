console.log(questions)

var daQuestion = $("#question"),
    allThebuttons = $(".daButtons"),
    questionTime = 15,
    maxTime = questionTime * questions.length,
    timer = $("#timer"),
    timingInterval = undefined,
    correctAnswers = 0,
    result = $("#result"),
    pos = 0,
    questionInterval = undefined;
console.log(daQuestion,allThebuttons,questionTime,maxTime,timer);

function subtract15 () {
    maxTime = maxTime - questionsTime;
}

function startTimer () {
    timerSet();
    timingInterval = setInterval(timerSet, 1000)
}
function timerSet () {
    timer.text(maxTime)
    maxTime--

    if (maxTime < 0) {
        clearInterval(timingInterval)
    }
}

function questionTimer(){

    questionInterval = setInterval(wait, questionTime*1000)
    
}

function wait(){
    questionLoop();

    if(pos == 7){
        clearInterval(questionInterval)
    }
}

function questionLoop(){
    daQuestion.text(questions[pos].title)
    for(var j = 0; j < questions[pos].choices.length; j++){
        var choice = questions[pos].choices[j],
            btnId = "#answer-" + j;
        $(btnId).text(choice)
    }
    pos++
}
questionLoop()
questionTimer()
startTimer()