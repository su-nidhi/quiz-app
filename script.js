let container = document.querySelector(".container");
let start = document.querySelector(".start");
let quiz = document.querySelector(".quiz");


//for tap the buton and open the quition and also open html disply nonone property ok

start.addEventListener("click",()=>{
   quiz.style.display="block";
   container.style.display="none"
})


//start the quiz 

let quizData = [
   {
      "que": "wht is your name",
      "a": "sunidhi",
      "b": "karima",
      "c": "neha",
      "d": "shuruty",
      "correct": "a"
   },
   {
      "que": "how are you",
      "a": "fine",
      "b": "good",
      "c": "extremly fine",
      "d": "ok ok",
      "correct": "c"
   },
   {
      "que": "wht your age",
      "a": "20",
      "b": "19",
      "c": "16",
      "d": "18",
      "correct": "d"
   }
]
let index = 0;
let right = 0, wrong = 0;
let total = quizData.length;
let quetion = document.querySelector(".quietion");
let option = document.querySelectorAll(".option");


const loadQuestion = () => {
   if (index == total) {
     return endQuiz();
   }
   reset();
   const data = quizData[index];
   quetion.innerHTML = ` ${index+1})${data.que}`;
   option[0].nextElementSibling.innerText = data.a;
   option[1].nextElementSibling.innerText = data.b;
   option[2].nextElementSibling.innerText = data.c;
   option[3].nextElementSibling.innerText = data.d;

}


const submitQuiz = () => {
   let data = quizData[index];
   const answer = getansewer();
   if (answer == data.correct) {
      right++;
   } else {
      wrong++
   }
   index++
   loadQuestion()
   return;
}


const getansewer = () => {
   let answer;
   option.forEach(
      (input) => {
         if (input.checked) {
            answer = input.value;
           

         }
      }

   )
   return answer;
}
const reset = () => {
   option.forEach(
      (input) => {
         input.checked = false;
      }
   )
}
   const endQuiz = () => {
      document.querySelector(".box").innerHTML = ` <h2>thanks for submitng &#128154;</h2>
      your score is=${right}/${total} 	&#128517;`
   }

loadQuestion()