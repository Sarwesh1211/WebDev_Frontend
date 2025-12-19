let gameSeq = [];
let userSeq = [];
let highScore=0;

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let scoreDisplay = document.createElement("h3");
scoreDisplay.innerText = `High Score: ${highScore}`;
document.body.appendChild(scoreDisplay);

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelup();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelup() {
    userSeq=[];
  level++;
  h2.innerText = `Level ${level}`;


  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);
//   console.log(randIdx);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randbtn);
}

function checkAns(idx){
    // console.log("curr level",level);
    // let idx=level-1;
    if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else {
            if (level > highScore) {
                highScore = level;
                scoreDisplay.innerText = `High Score: ${highScore}`;
        }
        
        h2.innerHTML=` game over ! Your score was <b>${level}<b> <br>press any key to start .`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white";

        },150);
        reset ();

    
    }
 
}

function btnpress() {
  console.log(this);
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", btnpress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}



// there is the exaplanation of code 

// // Arrays to store the correct game sequence and the user's input sequence
// let gameSeq = [];
// let userSeq = [];

// // Variable to track and display high score
// let highScore = 0;

// // Array containing the colors of the buttons
// let btns = ["yellow", "red", "purple", "green"];

// // Game state variables
// let started = false;
// let level = 0;

// // Selecting the h2 element to show level or game messages
// let h2 = document.querySelector("h2");

// // Creating and appending a new h3 element to show High Score
// let scoreDisplay = document.createElement("h3");
// scoreDisplay.innerText = `High Score: ${highScore}`;
// document.body.appendChild(scoreDisplay);

// // Event listener to start the game when user presses any key
// document.addEventListener("keypress", function () {
//   if (started == false) {              // Game starts only if not already started
//     console.log("game is started");
//     started = true;
//     levelup();                         // Start level 1
//   }
// });

// // Function to make the game button flash (when game shows the sequence)
// function gameFlash(btn) {
//   btn.classList.add("flash");           // Add flash class for visual effect
//   setTimeout(function () {
//     btn.classList.remove("flash");      // Remove flash after 250ms
//   }, 250);
// }

// // Function to make button flash when user clicks
// function userFlash(btn) {
//   btn.classList.add("userflash");
//   setTimeout(function () {
//     btn.classList.remove("userflash");
//   }, 250);
// }

// // Function to increase the level and generate next color in sequence
// function levelup() {
//   userSeq = [];                        // Clear user sequence for the new round
//   level++;                             // Increase level count
//   h2.innerText = `Level ${level}`;     // Update level text

//   let randIdx = Math.floor(Math.random() * 4);         // Pick a random index 0–3
//   let randColor = btns[randIdx];                      // Get color from btns array
//   let randbtn = document.querySelector(`.${randColor}`); // Select the corresponding button
  
//   gameSeq.push(randColor);             // Add random color to the game sequence
//   console.log(gameSeq);
//   gameFlash(randbtn);                  // Flash the chosen button
// }

// // Function to check if user input matches the game sequence
// function checkAns(idx) {
//   // If the current color matches the game sequence
//   if (userSeq[idx] === gameSeq[idx]) {
//     // If user completed the entire sequence correctly
//     if (userSeq.length == gameSeq.length) {
//       setTimeout(levelup, 1000);       // Move to next level after 1 second
//     }
//   } else {
//     // If user gave wrong input
//     if (level > highScore) {           // Update high score if current level is higher
//       highScore = level;
//       scoreDisplay.innerText = `High Score: ${highScore}`;
//     }

//     // Show Game Over message
//     h2.innerHTML = `game over ! Your score was <b>${level}</b> <br>press any key to start .`;

//     // Flash red background for error effect
//     document.querySelector("body").style.backgroundColor = "red";
//     setTimeout(function () {
//       document.querySelector("body").style.backgroundColor = "white";
//     }, 150);

//     reset();                           // Reset the game after wrong input
//   }
// }

// // Function triggered when user clicks on a color button
// function btnpress() {
//   console.log(this);
//   let btn = this;
//   userFlash(btn);                     // Flash the clicked button

//   userColor = btn.getAttribute("id"); // Get the color id of the button
//   userSeq.push(userColor);            // Add the color to user sequence

//   checkAns(userSeq.length - 1);       // Check the latest input
// }

// // Add click event listeners to all color buttons
// let allBtns = document.querySelectorAll(".btn");
// for (let btn of allBtns) {
//   btn.addEventListener("click", btnpress);
// }

// // Reset function to bring all values back to starting point
// function reset() {
//   started = false;
//   gameSeq = [];
//   userSeq = [];
//   level = 0;
// }



