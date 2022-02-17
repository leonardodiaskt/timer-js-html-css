var sec = 60;    
var intervalo
var min = 24;

function start(){
    intervalo = setInterval(timer, 1000)   
}

function timer() {
    sec -= 1
    if(sec < 1){
        sec = 60;
        min -= 1;
    }
    document.getElementById("minutos").innerHTML = min
    document.getElementById("segundos").innerHTML = sec
    if(sec <10){
        document.getElementById("segundos").innerHTML = `0${sec}`
    }
    if(min < 10){
        document.getElementById("minutos").innerHTML = `0${min}`
    }

    console.log(min, sec)
    if(min == 00 && sec == 1){
        sec = 00
        clearInterval(intervalo)
        reset()
        document.getElementById("minutos").innerHTML = '00'
        document.getElementById("segundos").innerHTML = '00'
    }
}

function pause(){
    clearInterval(intervalo)
}

function reset() {
    min = 24
    sec = 60
    clearInterval(intervalo)
    document.getElementById("minutos").innerHTML = '25'
    document.getElementById("segundos").innerHTML = '00'
}

