var pattern = [0, 0, 0, 0, 0, 0, 0, 0];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.1;
var guessCounter = 0;

let clueHoldTime = 1000;
let cluePauseTime = 1000;
let nextClueWaitTime = 1000;
const freqMap = {
  1: 261.63,
  2: 293.66,
  3: 329.63,
  4: 349.23
}

function startGame(){
    // randomize pattern
    progress = 0;
    gamePlaying = true;
  
    for(let i = 0; i < pattern.length; i++){
      pattern[i] = Math.floor((Math.random() * 4) + 1);
    }
  
    document.getElementById("startBtn").classList.add("hidden")
  document.getElementById("stopBtn").classList.remove("hidden")
  playClueSequence()
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden")
  document.getElementById("startBtn").classList.remove("hidden")
  
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  
  guessCounter = 0;
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function winGame(){
  stopGame();
  alert("That's it. You won!");
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(btn == pattern[guessCounter]){
    if(guessCounter >= progress){ // turn over?
      if(progress == pattern.length-1){ // is last?
        winGame()
      }
      else{
        progress++
        playClueSequence()
        clueHoldTime -= 100
        cluePauseTime -= 115
      }
    }
    else{
      guessCounter++
    }
  }
  else{
    loseGame()
  }
}

var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)