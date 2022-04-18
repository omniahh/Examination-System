
//Exam Timer
var count = 9;
var sec = 59;

var interval = setInterval(function () {
  try {
    document.getElementById("counter").innerHTML = `Time left: ${count}:${sec}`;
  } catch {
    console.log("Time out");
  }
  sec--;
  if (sec === 0) {
    count--;
    sec += 59;
  }

  if (count == -1) {
    clearInterval(interval);
    var timeout = document.createElement("p");
    timeout.innerText = "Time out!";
    timeout.style.textAlign = "center";
    document.body.appendChild(timeout);
    showScores();
  }
}, 1000);

// Question function constructor

function Question(id, value, answer, choices) {

    this.id = id;
    this.value = value;
    this.answer = answer;
    this.choices = choices;

}


// Answer function constructor

function Answer(id, value) {

    this.id = id;
    this.value = value;
}


//Every Question has array of answers

var ans1 = [

    new Answer(1, "Hyper Text Markup Language"),
    new Answer(2, "Hyper Text Preprocessor"),
    new Answer(3, "Hyper Text Multiple Language"),
    new Answer(4, "Hyper Tool Multi Language")

];


var ans2 = [

    new Answer(1, "Common Style Sheet"),
    new Answer(2, "Colorful Style Sheet"),
    new Answer(3, "Computer Style Sheet"),
    new Answer(4, "Cascading Style Sheet")

];

var ans3 = [

    new Answer(1, "Hypertext Preprocessor"),
    new Answer(2, "Hypertext Programming"),
    new Answer(3, "Hypertext Preprogramming"),
    new Answer(4, "Hometext Preprocessor")

];

var ans4 = [

    new Answer(1, "Stylish Question Language"),
    new Answer(2, "Stylesheet Query Language"),
    new Answer(3, "Statement Question Language"),
    new Answer(4, "Structured Query Language")

]; 

var ans5 = [

    new Answer(1, "eXtensible Markup Language"),
    new Answer(2, "eXecutable Multiple Language"),
    new Answer(3, "eXTra Multi-Program Language"),
    new Answer(4, "eXamine Multiple Language")

]; 

var q1 = new Question(

    1,
    "What does HTML stand for?",
    ans1[0].id,
    ans1
)


var q2 = new Question(

    2,
    "What does CSS stand for?",
    ans2[3].id,
    ans2
)


var q3 = new Question(

    3,
    "What does PHP stand for?",
    ans3[0].id,
    ans3
)


var q4 = new Question(

    4,
    "What does SQL stand for?",
    ans4[3].id,
    ans4
)


var q5 = new Question(

    5,
    "What does XML stand for?",
    ans5[0].id,
    ans5
)


//create array of Qs and shuffle them

var questions=[q1,q2,q3,q4,q5];

// Shuffle Array: display Qs in random order
function shuffleArray(array) {

    var temp, current;
    var top = array.length;
    
    if(top) {
        
        while (--top) {
            
            current = Math.floor(Math.random() * (top+1));
            temp = array[current];
            array[current] = array[top];
            array[top] = temp;

        }
    }

    return array;
}
var randomQ = shuffleArray(questions);

// Get Questions
var qSpan = document.getElementById("q");

function displayQuestion(id) {

    qSpan.innerHTML = `${id}- ${randomQ[id - 1]["value"]}`;
}


// Get Answers
var ansContainer = document.getElementById("answers");
var solution = [];
function displayAnswers(quesID) {

    var answerChoices = ["first", "second", "third", "fourth"];
    ansContainer.innerHTML = "";
    for(var i = 0; i < randomQ[quesID - 1]["choices"].length; i++) {
        

        ansContainer.innerHTML += ` <input type = "radio" class="choiceRadio" name = "choice" id = '${answerChoices[i]}'>
        <label for = "${answerChoices[i]}"> ${randomQ[quesID - 1]["choices"][i]["value"]} </label> <br><br>`;
        
    }

  
    var qOrder = randomQ[quesID-1]['id'];

 
    for(var j = 0; j < solution.length; j++) {

        
        if(solution[j]['qid'] == qOrder) {

            if(solution[j]['studAns'] == 1) {
 
                document.getElementById("first").checked = true;
                
            } else if(solution[j]['studAns'] == 2) {
                
                document.getElementById("second").checked = true;
                
            } else if(solution[j]['studAns'] == 3) {
                
                document.getElementById("third").checked = true;

            } else if(solution[j]['studAns'] == 4) {
                
                document.getElementById("fourth").checked = true;

            }
        }
    }
}


var currQuestion;
displayQuestion(1);
currQuestion = 1;
displayAnswers(1);

// Get student's Answer
function getAnswer() {

    if(document.getElementById("first").checked) {

        return 1;
    }

    if(document.getElementById("second").checked) {

        return 2;
    }

    if(document.getElementById("third").checked) {

        return 3;
    }

    if(document.getElementById("fourth").checked) {

        return 4;
    }
}


function getSolution(id, ans) {

    if(solution.length) {

        for(var i = 0; i < solution.length; i++) {

            if(id == solution[i]['qid']) {

                solution[i]['studAns'] = ans                     
                return;
            }
        }

        solution.push({

            qid: id,
            studAns: ans
        });

    } else {

        solution.push({

            qid: id,
            studAns: ans
        });
    }

}

//save ans for marked and previous
function saveAnswer(id) {

    var stAns = getAnswer();
    if(stAns) {

        getSolution(id, stAns);

    }
}

// Next 
function Next() {

    if(currQuestion <= randomQ.length - 1) {

        saveAnswer(randomQ[currQuestion - 1]['id']);
        currQuestion++;
        displayQuestion(currQuestion);
        displayAnswers(currQuestion);
    }

    if(currQuestion === randomQ.length ){
    var submit= document.getElementById("submit");
    submit.style.display="inline";
    }
    }

// Previous

function Prev() {

    if(currQuestion- 1 > 0) {

        saveAnswer(randomQ[currQuestion - 1]['id']);
        currQuestion--;
        displayQuestion(currQuestion);
        displayAnswers(currQuestion);
    }
  
}

// Marked questions
var markArray = [];
var markedQues = [];
var deleteMarked = [];
var markedDiv = document.getElementById("marked");
var markedSection = document.getElementById("markedSection");

function Mark() {

    // so it doesn't repeat marking for the same question
    for(var i = 0; i < markArray.length; i++) {

        if(currQuestion=== markArray[i]) {

            return;
        }
    }

    saveAnswer(randomQ[currQuestion - 1]['id']);

    markedDiv.innerHTML +=  `<div id='${currQuestion}'>
                                <p>Q: ${currQuestion}</p><br>
                                <button class = "markedQues">Go</button>
                                <button class = "deleteMarked">Delete</button>
                            </div><br>`;

                            
    markedSection.style.overflow = "scroll";
    markArray.push(currQuestion);

    markedQues = document.getElementsByClassName('markedQues');
    deleteMarked = document.getElementsByClassName('deleteMarked');

    // Show Marked Question
    for(var i = 0; i < markedQues.length; i++) {

        markedQues[i].addEventListener('click', function(e) {

            saveAnswer(randomQ[currQuestion- 1]['id']);
            currQuestion = e.target.parentElement.id;
            displayQuestion(currQuestion);
            displayAnswers(currQuestion);
        });
    }
    

    //Delete MarkedQuestion

    for(var i = 0; i < deleteMarked.length;i++) {

        deleteMarked[i].addEventListener('click',function() {

            this.parentElement.innerHTML = "";
            markArray.pop(currQuestion);
        })
    }

}

// score
var score = 0;
function calcScore() {

    for(var i = 0; i < solution.length; i++) {

        for(var j = 0; j < randomQ.length; j++) {

            if(solution[i]['qid'] == questions[j]['id'] && solution[i]['studAns'] == questions[j]['answer']) {

                score += 1;
            }

        }
    }
}



function showScore() {

    saveAnswer(randomQ[currQuestion - 1]['id']);
   calcScore();

    var removeMarked= document.getElementById("markedSection");
    removeMarked.style.display="none";
    
    var result = "<h2>Thanks for your time :) </h2>";
    result += "<h2 id='score'> Your score: " + score +"  out of 5" + "</h2>";
    var quizScore = document.getElementById("quiz");
    quizScore.innerHTML = result;
    quizScore.style.left="50%";
}



