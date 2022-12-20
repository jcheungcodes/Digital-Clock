const hrs = document.getElementById('hour');
const mins = document.getElementById('minute');
const secs = document.getElementById('second');
const ToD = document.getElementById('session');

function timeDisplay(){
    let timeDate = new Date();
    let hr = timeDate.getHours();
    let min = timeDate.getMinutes();
    let sec = timeDate.getSeconds();
    let session = ToD;

    if(hr >= 12){
        ToD.innerHTML = "PM";
    }else{
        ToD.innerHTML = "AM"
    }
    
    if(hr >= 12){
        hr = hr - 12
    }

    hrs.innerHTML = hr;
    mins.innerHTML = min;
    secs.innerHTML = sec;
}
setInterval(timeDisplay, 10)
