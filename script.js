let scoreEl = document.getElementById("score-el");
let count = 0;
let countGuest= 0;
let scoreElGuest = document.getElementById("score-el-guest")

//adds one to Home score
function incrementOne() {
    count += 1;
    scoreEl.textContent = count;

}

//adds one to Guest Score
function incrementOneGuest() {
    countGuest += 1;
    scoreElGuest.textContent = countGuest;

}

//adds 2 to Home score
function incrementTwo() {
    count += 2;
    scoreEl.textContent = count;

}

//adds 2 to Guest Score
function incrementTwoGuest() {
    countGuest += 2;
    scoreElGuest.textContent = countGuest;

}

//adds 3 to Home score
function incrementThree() {
    count += 3;
    scoreEl.textContent = count;

}

//adds 3 to Guest Score
function incrementThreeGuest() {
    countGuest += 3;
    scoreElGuest.textContent = countGuest;

}

//adding timer
 const startingMinutes = 40;
 let time = startingMinutes * 60;

 const countdownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000)

 function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
}