let timer = 60;
let score = 0;
let hitRandom = 0;


function increaseScore(){
    score += 10;
    document.querySelector(".score").innerHTML = score;
}

function runTimer() {
    let time = setInterval(function () {
        if (timer > 0) {
            timer--;
        }else{
            clearInterval(timer);
            document.querySelector(".pbottom").innerHTML = `<h1>Game Over! Your Score is ${score}</h1>`;

        }
        document.querySelector(".timer").innerHTML = timer;
    }, 1000);

}

function getNewHit(){
    hitRandom = Math.floor(Math.random()*10);
    document.querySelector(".hitVal").innerHTML = hitRandom;
}

function makeBubble() {
    let clutter = "";
    for (let i = 1; i <= 200; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector(".pbottom").innerHTML = clutter;

}

document.querySelector(".pbottom").addEventListener("click", function(dets){
    console.log(dets);
    let clickedNum = Number(dets.target.textContent);

    if(clickedNum === hitRandom){
        increaseScore();
        getNewHit();
        makeBubble();
    }
    
})

makeBubble();
runTimer();

getNewHit();
