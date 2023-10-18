var timerObj = document.querySelector("#timer")
var startBtnObj = document.querySelector("#Start-btn")
var resetBtnrObj = document.querySelector("#Reset-btn")
var isTimerRunning =false
var interval
resetBtnrObj.addEventListener("click",()=>{
    console.log("reset button clicked");
    timerObj.textContent="00:00";
    startBtnObj.textContent ="Start";
    isTimerRunning = false
    clearInterval(interval)
})
 startBtnObj.addEventListener("click",()=>{
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
                seconds++ 
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
            timerObj.textContent = minutes + ":" + seconds ;
        }, 1000)
    }
})

document.addEventListener("keydown",function (event){
    if(event.key=="s"){
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
                seconds++ 
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
            timerObj.textContent = minutes + ":" + seconds ;
        }, 1000)
    }
    }
    else if(event.key=="r"){
        console.log("reset button clicked");
        timerObj.textContent="00:00";
        startBtnObj.textContent ="Start";
        isTimerRunning = false
        clearInterval(interval)
    }
});
 
 