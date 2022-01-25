let mins = 00;
let seconds = 00;

let getMins = document.querySelector('.mins');
let getSeconds = document.querySelector('.seconds');
let btnStart = document.querySelector('.start');
let btnStop = document.querySelector('.stop');
let btnReset = document.querySelector('.reset');
let interval;

function startTimer(){
    seconds++;
    if(seconds <= 9){ getSeconds.innerHTML = '0' + seconds; }
    if(seconds > 9){ getSeconds.innerHTML = seconds; }
    if(seconds > 59){ 
        mins++;
        getMins.innerHTML = '0' + mins;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }
    if(mins > 9){
        getMins.innerHTML = mins;
    }
}

btnStart.addEventListener('click', function(){
    interval = setInterval(startTimer, 1000);
});

btnStop.addEventListener('click', function(){
    clearInterval(interval);
});

btnReset.addEventListener('click', function(){
    clearInterval(interval);
    seconds = 00;
    mins = 00;
    getSeconds.innerHTML = '00';
    getMins.innerHTML = '00';
});