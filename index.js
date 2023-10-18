var timerObj = document.querySelector("#timer")
var startBtnObj = document.querySelector("#Start-btn")
var resetBtnrObj = document.querySelector("#Reset-btn")
var isTimerRunning =false
var interval
resetBtnrObj.addEventListener("click",()=>{
    resetTimer();
})
 startBtnObj.addEventListener("click",()=>{
    startStopTimer();
})

document.addEventListener("keydown",function (event){
    if(event.key=="s"){
        startStopTimer();
    }
    else if(event.key=="r"){
        resetTimer();
    }
});

function startStopTimer(){
    console.log("start button clicked");
    if(isTimerRunning){
        startBtnObj.textContent ="Start";
        isTimerRunning = false
        clearInterval(interval)
    }
    else{
        startBtnObj.textContent="Stop";
        isTimerRunning = true
        interval = setInterval(function(){
            var timerText = timerObj.textContent
            var timerArr = timerText.split(":") 
            var minutes = Number(timerArr[0])
            var seconds = Number(timerArr[1])
            var miliseconds= Number(timerArr[2])
            miliseconds++
            if(miliseconds == 100){
                seconds++
                miliseconds = 0
            }
            if(miliseconds < 10){
                miliseconds="0"+miliseconds
            }
            if(seconds == 60){
                minutes++
                seconds = 0
            }
            if(minutes < 10){
                minutes = "0" + minutes
            }
            if(seconds < 10){
                seconds = "0" + seconds
            }
            timerObj.textContent = minutes + ":" + seconds + ":" + miliseconds;
        }, 10)
    }
}

function resetTimer(){
    console.log("reset button clicked");
    timerObj.textContent="00:00:00";
    startBtnObj.textContent ="Start";
    isTimerRunning = false
    clearInterval(interval)
}