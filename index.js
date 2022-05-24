const numbers = document.querySelectorAll(".number");
const num = document.querySelectorAll(".num");
var angle = 30;
var num_angle = -30;
const arm_seconds = document.querySelector(".arm-seconds");
const arm_minutes = document.querySelector(".arm-minutes");
const arm_hour = document.querySelector(".arm-hour");


numbers.forEach( n => {
    n.style.transform = `rotate(${angle}deg)`;
    angle += 30;
});
num.forEach(n => {
    n.style.transform = `rotate(${num_angle}deg)`
    num_angle -= 30;
})

setInterval(moveClock, 1000);

function moveClock(){
    console.log("im in")
    const d = new Date();
    var minutes = d.getMinutes();
    var hour = d.getHours();
    var seconds = d.getSeconds();
    arm_seconds.style.setProperty("--rotation", seconds*6);
    arm_minutes.style.setProperty("--rotation", minutes*6 + 6*seconds/60);
    arm_hour.style.setProperty("--rotation", hour*30 + 30*minutes/60 + seconds/120);
}

moveClock()