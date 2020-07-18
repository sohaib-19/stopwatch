var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;

function timer() {
    msec++
    msecHeading.innerHTML = msec;
    if(msec >= 100) {
        sec++
        secHeading.innerHTML = sec
        msec = 0;

    }
    else if(sec >= 60) {
        min++
        minHeading.innerHTML = min
        sec = 0
       
    }
   
}

function Start() {
    interval = setInterval(timer,10)
    disableBtn()
}
function Stop() {

    clearInterval(interval)
}
function Reset() {
    var min = 0;
var sec = 0;
var msec = 0;
minHeading.innerHTML = min
secHeading.innerHTML = sec
msecHeading.innerHTML = msec
Stop()
}
function disableBtn(){
    var btn = document.getElementById("Start");
    btn.disabled = true
}
