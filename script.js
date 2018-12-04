/*INTERFACE*/
let eltInterface1 = document.getElementById('interface_1');
let eltInterface2 = document.getElementById('interface_2');
let eltInterface3 = document.getElementById('interface_3');

eltInterface2.style.display = "none";
eltInterface3.style.display = "none";

/* BTN START INTERAFCE 1*/

let eltBtnStart = document.getElementById('btnStart');
eltBtnStart.addEventListener("click", start, false);

function start() {
  eltInterface1.style.display = "none";
  eltInterface2.style.display = "inherit";
  timeCount();
}

/* TIMER*/
let eltTimer = document.getElementById('tmp');
let time = 3;
let count;

function timeCount(){
  eltTimer.textContent = "Temps restant : " + time.toFixed(1)+ "s";
  time = time - 0.1;
  count = setTimeout (timeCount, 100);
  if ((time < 0)) {
    eltInterface2.style.display = "none";
    eltInterface3.style.display = "inherit";
  }
};

/* SCORE + LETTRE ALEATOIRE*/
let eltScore = document.getElementById('score');
let score = 0
eltScore.textContent = "Score : "+score;

let eltLetter = document.getElementById('letter');

let alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let random = Math.floor(Math.random()*26);
let letterRandom = alpha[random];
eltLetter.textContent = letterRandom;
let newTime = time;
let eltScoreFinal = document.getElementById('score_final');

window.addEventListener("keydown",function (event){
  if (event.key.toUpperCase() === letterRandom && eltInterface2.style.display === "inherit") {
    let random = Math.floor(Math.random()*26);
    letterRandom = alpha[random];
    eltLetter.textContent = letterRandom;
    score += 1;
    eltScore.textContent = "Score : " + score;
    if ((newTime > 1)){
      newTime = newTime - 0.5;
    }
    time = newTime;
    eltScoreFinal.textContent = "Score : " + score;
  }
  else{
    eltInterface2.style.display = "none";
    eltInterface3.style.display = "inherit";
  }
},false);

let eltNewPartie = document.getElementById('btnNewPartie');

eltNewPartie.addEventListener("click", start2, false);

function start2() {
  eltInterface3.style.display = "none";
  eltInterface2.style.display = "inherit";
  score = 0;
  time = 3;
  newTime = time;
};
