/* quiz content */
const quizSection = [
    {
        lyrics: "Go easy on me, baby, I was still a......",
        a: "BABY",
        b: "GIRL",
        c: "MAN",
        d: "CHILD",
        correct: "d",
    },
    {
        lyrics: "And you know me, turn the O-2 into......",
        a: "A SQUARE",
        b: "APARTMENTS",
        c: "FIRE",
        d: "THE O-3",
        correct: "d",
    },
    {
        lyrics: "Mother always told me, be careful of who you......",
        a: "LOVE",
        b: "TRUST",
        c: "BECOME",
        d: "HATE",
        correct: "a",
    },
    {
        lyrics: "I took a sip from my ...... cup",
        a: "TEA",
        b: "DEVILS",
        c: "COFFEE",
        d: "None of the above",
        correct: "b",
    },
    {
         lyrics: "She's got a ...... that it seems to me",
         a: "LOOK",
         b: "FACE",
         c: "SMILE",
         d: "CRY",
         correct: "c",
    },
    {
        lyrics: "And when the ...... people living in the world agree",
        a: "BROKENHEARTED",
        b: "EXCITED",
        c: "SAD",
        d: "HAPPY",
        correct: "a",
    },  
    {
        lyrics: "Welcome to the ...... California, such a lovely place",
        a: "SUNNY",
        b: "STATE OF",
        c: "HOTEL",
        d: "None of the above",
        correct: "c",
    },
    {
        lyrics: "Sin City's cold and ......, no one's around to judge me",
        a: "LONELY",
        b: "EMPTY",
        c: "RAINING",
        d: "CRAZY",
        correct: "b",
    },
    {
        lyrics: "I came in like a ...... ball",
        a: "BOUNCY",
        b: "GOLF",
        c: "RUGBY",
        d: "WRECKING",
        correct: "d",
    },
    { 
        lyrics: "Cause I'm missing more than just your ......",
        a: "MONEY",
        b: "CAR",
        c: "BODY",
        d: "FACE",
        correct: "c",
    },
    {
    lyrics: "I see a ...... door and I want it painted black",
      a: "RED",
      b: "BLUE",
      c: "GOLD",
      d: "PINK",
      correct: "a",
    },
    {
        lyrics: "She got one of your ......, got you for eighteen years",
        a: "DOGS",
        b: "KIDS",
        c: "FRIENDS",
        d: "CARS",
        correct: "b",
    },
    {
        lyrics: "Colours of the world, ...... up your life",
        a: "SHAKE",
        b: "TURN",
        c: "SPICE",
        d: "TWIST",
        correct: "c",
    },
    {
        lyrics: "A seven ...... army couldn't hold me back",
        a: "PERSON",
        b: "MAN",
        c: "WOMAN",
        d: "NATION",
        correct: "d",
    },
    { 
        lyrics: "And all the ...... that lead us there are blinding",
        a: "LIGHTS",
        b: "HEIGHTS",
        c: "BIKES",
        d: "SIGHTS",
        correct: "a",
    }
];

/* declaration of variables */
const quiz = document.getElementById('quiz');
const optionElements = document.querySelectorAll('.answer');
const lyricsElement = document.getElementById('lyrics');
const optionA = document.getElementById('option_a');
const optionB = document.getElementById('option_b');
const optionC = document.getElementById('option_c');
const optionD = document.getElementById('option_d');
const nextBtn = document.getElementById('next');
let shuffledQuestions

let currentQuiz = 0;
let result = 0;
let maxQuizSection = 10;

playQuiz()

/*function to start playing the quiz*/
function playQuiz() {
    deselectAnswers()
    /*shuffles quiz questions*/
    shuffledQuestions = quizSection.sort(() => Math.random() - 0.5);

const currentQuizSection = quizSection[currentQuiz]

   lyricsElement.innerText = currentQuizSection.lyrics
   optionA.innerText = currentQuizSection.a
   optionB.innerText = currentQuizSection.b
   optionC.innerText = currentQuizSection.c
   optionD.innerText = currentQuizSection.d
};

/*checking options that are not selected*/
function deselectAnswers() {
    optionElements.forEach(optionElements => optionElements.checked = false)
};

/*checking option user selects*/
function getSelected () {
    let answer 
    optionElements.forEach(optionElements => {
        if(optionElements.checked) {
            answer = optionElements.id
        }
    })
    return answer
};

/*event listener on next button*/
/*checks selected answers and increments score if correct*/
/*alerts for correct and wrong answers on click of next button*/
nextBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if(answer === quizSection[currentQuiz].correct) {
            result++
            alert('Yas Queen!')
        } else {
            alert('Oh No!') };

            currentQuiz++
            
            /*checks if user has reached 10 questions and if so displays results and play again button*/
            if(currentQuiz < maxQuizSection) {
                playQuiz()
            } else {
                quiz.innerHTML = `
                <h2>You know ${result}/${maxQuizSection} songs pretty well! </h2>
     
                <button onclick="location.reload()">Play Again!</button>
                `
        }
    }
});