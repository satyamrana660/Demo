let Hours = document.getElementsByClassName("item")[0];
let Minute = document.getElementsByClassName("item")[1];
let Sec = document.getElementsByClassName("item")[2];
let MSec = document.getElementsByClassName("item")[3];
let Year = document.getElementById("Year");
let Month = document.getElementById("Month");
let Day = document.getElementById("Day");


setInterval(()=>{
    
    
let currentDate = new Date();

let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
let mseconds = currentDate.getMilliseconds();
const cyear = currentDate.getFullYear();
const cmonth = currentDate.getMonth() + 1; 
const cday = currentDate.getDate();

Hours.innerHTML = hours;
Minute.innerHTML = minutes;
Sec.innerHTML = seconds;
MSec.innerHTML = mseconds;
Year.innerText = cyear;
Day.innerText = cday;

switch(cmonth)
{
    case 1:
        {
            Month.innerText = "Jan";
            break;
        }
    case 12:
        {
            Month.innerText = "Dec";
            break;
        }
}




},100)
