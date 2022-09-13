// import { default as Swal } from "sweetalert2";  

let input = document.querySelector('.input');
let output = document.querySelector('.output');
let currentDate = document.getElementById('orignalString');
let clrInput = document.querySelector('.clrInput');
let clrOutput = document.querySelector('.clrOutput');

// Clear
clrInput.addEventListener('click', ()=>{
    input.value='';
});
clrOutput.addEventListener('click',()=>{
    output.innerText='Your output';
});
