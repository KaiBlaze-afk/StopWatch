var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

function start(){
    timer = true;
    stopwatch();
}

function stop(){
    timer = false;
}

function reset(){
    timer = false;
    sec = 0;
    count = 0;
    min = 0;
    hr = 0;
    stopwatch()
}

function stopwatch(){
    if(timer == true){
        count =count+1;
        
        if(count == 100){
            sec = sec + 1;
            count = 0;
        }

        if(sec == 60){
            min = min + 1;
            sec = 0;
        }

        if(min == 60){
            hr = hr + 1;
            min = 0;
        }

        setTimeout("stopwatch()",10);
    }
        if(sec<=9){
            document.getElementById("sec").innerHTML = "0"+sec;
        }
        else{
            document.getElementById("sec").innerHTML = sec;
        }

        if(count<=9){
            document.getElementById("count").innerHTML = "0"+count;
        }
        else{
            document.getElementById("count").innerHTML = count;
        }
        if(min<=9){
            document.getElementById("min").innerHTML = "0"+min;
        }
        else{
            document.getElementById("min").innerHTML = min;
        }
        if(hr<=9){
            document.getElementById("hr").innerHTML = "0"+hr;
        }
        else{
            document.getElementById("hr").innerHTML = hr;
        }
}
