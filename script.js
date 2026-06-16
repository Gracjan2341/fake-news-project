function checkQuiz() {

let score = 0;

for(let i = 1; i <= 5; i++){

const answer = document.querySelector(`input[name="q${i}"]:checked`);

if(answer){
score += Number(answer.value);
}

}

document.getElementById("result").innerHTML =
`You scored ${score} out of 5!`;

if(score === 5){

document.getElementById("result").innerHTML =
"🎉 PERFECT SCORE! 5 out of 5! 🎉";

confetti({
particleCount: 300,
spread: 180,
origin: { y: 0.6 }
});

setTimeout(() => {
confetti({
particleCount: 400,
spread: 360
});
}, 800);

setTimeout(() => {
confetti({
particleCount: 500,
spread: 360
});
}, 1600);

}

}