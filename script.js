let timer;
let minutes=0, seconds=0, hours=0;//initializing all to 0
let running=false;//at starting timer if off so false

function starttimer()//start timer fuction executed when timer is started
{
    if(!running){
        running=true;
        timer=setInterval(updatetime,1000);//counting the seconds, minutes, hours (1 second=1000 milliseconds)
    }
}

function pausetimer()//pause timer fuction executed when timer is paused
{
    clearInterval(timer);//stoping timer
    running=false;
}

function stoptimer()
{
    clearInterval(timer);
    running=false;
    minutes=0, seconds=0, hours=0;//reseting all to 0
    document.getElementById("display").innerText="00:00:00";//displaying staring part when timer was not started
}

function updatetime()
{
    seconds++;//incrementing seconds
    if(seconds==60)//checking if second=60 then converting it to 1 minute (60 seconds=1 minute)
    {
        minutes++
        seconds=0;
        if(minutes==60)//checking if minutes=60 then converting it to 1 hour (60 minutes=1 hour)
        {
                hours++;
                minutes=0;
        }
    }
    //displaying timer
document.getElementById("display").innerText = 
        (hours < 10 ? "0" : "") + hours + ":" + 
        (minutes < 10 ? "0" : "") + minutes + ":" + 
        (seconds < 10 ? "0" : "") + seconds;
}