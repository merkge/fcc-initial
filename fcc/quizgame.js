/*You should create an array named questions.
The questions array should contain at least five objects, each having the keys category, question, choices, and answer.
The category key should have the value of a string representing a question category.
The question key should have the value of a string representing a question.
The choices key should have the value of an array containing three strings, which are alternative answers to the question.
The answer key should have the value of a string, representing the correct answer to the question. Also, the value of answer should be included in the choices array.
You should have a function named getRandomQuestion that takes an array of questions as a parameter and returns a random question object from the array.
You should have a function named getRandomComputerChoice that takes the array of the available choices as a parameter, and returns a random answer to the selected question.
You should have a function named getResults that takes the question object as the first parameter and the computer's choice as the second parameter. The function should return The computer's choice is correct! if the answer is correct. Otherwise, it returns The computer's choice is wrong. The correct answer is: <correct-answer>, where <correct-answer> is the value of the correct answer to the chosen question.
Run the Tests (Ctrl + Enter)
Reset this lesson
Get Help
Tests
Passed:1. You should create an array named questions.
Passed:2. The questions array should contain at least five objects, each having the keys category, question, choices, and answer.
Passed:3. The category key should have the value of a string representing a question category.
Passed:4. The question key should have the value of a string representing a question.
Passed:5. The choices key should have the value of an array containing three strings.
Passed:6. The answer key should have the value of a string.
Passed:7. The value of answer should be included in the choices array.
Failed:8. You should have a function named getRandomQuestion that takes an array of questions as a parameter and returns a random question object from the array.
Failed:9. You should have a function named getRandomComputerChoice that takes the array of the available choices as a parameter, and returns a random answer to the selected question.
Passed:10. You should have a function named getResults.
Failed:11. Your getResults function should take the question object as the first parameter and the computer's choice as the second parameter.
Failed:12. If the computer choice matches the answer, getResults should return The computer's choice is correct!
Failed:13. If the computer choice doesn't match the answer, getResults should return The computer's choice is wrong. The correct answer is: <correct-answer>, where <correct-answer> is the value of the correct answer to the chosen question.*/
let questions = [];
questions.push(
  {  
     category: "Movies",
     question: "What year was Jaws made?",
     choices: ["1975","1970", "1973"],
     answer: "1975"
  });
  
questions.push(
  {  
     category: "American History",
     question: "Name the war against slavery?",
     choices: ["Civil", "Slave", "North/South"],
     answer: "Civil"
  });

questions.push(
  {  
     category: "Dog Breeds",
     question: "What breed is often found in dogfights?",
     choices: ["Pitbull", "Afghan", "Shitzu"],
     answer: "Pitbull"
  });

questions.push(
  {  
     category: "French Cuisine",
     question: "Puff pastry of veal and cheese?",
     choices: ["Cordon Bleu", "Croissant", "Chocolate Mousse"],
     answer: "Cordon Bleu"
  });

questions.push(
  {  
     category: "Would Geography",
     question: "Body of water that Trump wants to rename?",
     choices: ["Gulf of Mexico", "Bering Strait", "Panama Canal"],
     answer: "Gulf of Mexico"
  });
//console.log(questions);

let n = 0;
let m = 0;

function getRandomQuestion(questions) {
   n = Math.floor(Math.random() * 5)
   console.log(`got rand q ${n+1}`);
   return (questions[n].question);
}
console.log(getRandomQuestion(questions));

function getRandomComputerChoice(choices) {
    m = Math.floor(Math.random() * 3);
    console.log(`got rand comp ans ${m+1}`);
    return (questions[n].choices[m]);
}
let randComputerChoice = getRandomComputerChoice(questions.choices);

console.log(randComputerChoice);//works
//let p = 0;
function getResults(questions, randComputerChoice) {
   //p ++
   if (randComputerChoice === questions[n].answer) {
       console.log("Hooray!");
       return "The computer's choice is correct!";
    }
    else {
       console.log(`The computer's choice is wrong. The correct answer is: ${questions[n].answer}`);
       return;
    }
};



