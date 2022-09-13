// import { default as Swal } from "sweetalert2";  

let input = document.querySelector('.input');
let output = document.querySelector('.output');
let currentDate = document.getElementById('currentDate');
let clrInput = document.querySelector('.clrInput');
let clrOutput = document.querySelector('.clrOutput');

// Clear
clrInput.addEventListener('click', () => {
    input.value = '';
});
clrOutput.addEventListener('click', () => {
    output.innerText = 'Your output';
});

// Output Function
function out(outputText,time){
    output.innerHTML = `${outputText}<br>${time}` ;
}
// Default value
function defaultVal(text){
    currentDate.innerText = text;
}

// Current time stamp
function currentTime() {
    let timeNow = new Date();
    return timeNow;
}


// Click time
function click(){
    let time = currentTime();
    let secClick = time.getSeconds();
    let minuteClick = time.getMinutes();
    let hourClick = time.getHours()
    return `You clicked this button on ${hourClick}:${minuteClick}:${secClick}`;
}



// Setting current date and time
defaultVal(currentTime());

// Get day
function getNowDay(){
    let now = currentTime();
    let day = now.getDay();
    let  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    day = days[day];
    out(`Name of today is ${day}` , click());
}

// Calculate days since born
function calDays(){
    let nowTime = currentTime();
    inputVal = input.value;
    let bornTime = new Date(inputVal);
    let msToday = nowTime.getTime();
    let msDob = bornTime.getTime();
    if(bornTime=='Invalid Date'){
        Swal.fire(
            'Invalid Value',
            'Please first enter your date of birth in input feild.',
            'error'
          )
          return
    }
    else if(msDob>msToday){
        Swal.fire(
            'Invalid Value',
            'Please enter valid date of birth in input feild.',
            'error'
          )
          return
    }
    else{
        diffDate = Math.floor((msToday - msDob)/(1000*60*60*24));
        out(`${diffDate} Days`,click())
    }
}