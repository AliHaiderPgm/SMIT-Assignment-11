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
    let hourClick = time.getHours();
    if(hourClick>12){
        hourClick = hourClick-12;
        return `You clicked this button on ${hourClick}:${minuteClick}:${secClick} PM`;
    }
    else if(hourClick==00){
        hourClick = 12;
        return `You clicked this button on ${hourClick}:${minuteClick}:${secClick} AM`;
    }
    else{
        return `You clicked this button on ${hourClick}:${minuteClick}:${secClick} AM`;
    }
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
        if(diffDate>1){
            out(`${diffDate} Days since you are born.`,click())
        }
        else{
            out(`${diffDate} Day since you are born.`,click())
        }
    }
}

// Next Birthdday
function nextBd(){
    let timeNow = currentTime();
    msTimeNow = timeNow.getTime();
    inputVal = input.value;
    let nxtBd = new Date(inputVal);
    msNxtBd = nxtBd.getTime();
    console.log(nxtBd)
    if(nxtBd=='Invalid Date' || msNxtBd<msTimeNow){
        Swal.fire(
            'Inavlid Date',
            'Please enter your next date of birth in input feild!',
            'error'
        )
    }
    else{
        diffDate = Math.floor((msNxtBd-msTimeNow)/(1000*60*60*24));
        if(diffDate>1){
            out(`Your next birhtday will be in "${diffDate}" Days`,click())
        }
        else{
            out(`Your next birhtday will be in "${diffDate}" Day`,click())
        }
    }
}


// Greeting User
function greet(){
    let time = currentTime();
    let hour = time.getHours();
    if(hour>4 && hour<=12){
        out(`<i class="fa-solid fa-mountain-sun morning"></i> Good Morning Sir!`,click());
    }
    else if(hour>12 && hour<=17){
        out(`<i class="fa-solid fa-sun noon"></i> Good Afternoon Sir!`,click());
    }
    else if(hour>17 && hour<=19){
        out(`<i class="fa-solid fa-mountain-sun eve"></i> Good Evening Sir!`,click());
    }
    else{
        out(`<i class="fa-solid fa-moon night"></i> Good Night Sir!`,click());
    }
}


// Just time
function justTime(){
    let time = currentTime();
    let secClick = time.getSeconds();
    let minuteClick = time.getMinutes();
    let hourClick = time.getHours();
    if(hourClick>12){
        hourClick = hourClick-12;
        return  `${hourClick}:${minuteClick}:${secClick} PM`;
    }
    else if(hourClick==00){
        hourClick = 12;
        return `${hourClick}:${minuteClick}:${secClick} AM`;
    }
    else{
        return `${hourClick}:${minuteClick}:${secClick} AM`;
    }
}
// Tell time 1
function tell(btnName){
    if(output.innerHTML == 'Your output'){
        output.innerHTML = '';
        output.innerHTML += `You clicked ${btnName} button on ${justTime()}. <br>`
    }
    else{
        output.innerHTML += `You clicked ${btnName} button on ${justTime()}. <br>`
    }
}


// Calculate tax
function calTax(){
    Swal.fire({
        title: 'Enter your amount',
        input: 'number',
        inputPlaceholder:'Numbers only',
        inputLabel:'Please enter amount in Rupees.',
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return 'Enter some amount!'
          }
          else{
            value = Math.ceil((17/100)*value);
            out(`Your total GST as per 17% will be Rs.${value}`,click())
          }
        }
      })

}


// Calculate Total Amount
function calTotal(){
    Swal.fire({
        title: 'Enter your amount',
        input: 'number',
        inputPlaceholder:'Numbers only',
        inputLabel:'Please enter amount in Rupees.',
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return 'Enter some amount!'
          }
          else{
            value = parseInt(value);
            value = Math.ceil((17/100)*value)+value;
            out(`Your total amount including GST will be Rs.${value}`,click())
          }
        }
      })
}