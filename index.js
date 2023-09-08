

function updateTime() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours().toString().padStart(2, '0');
    const currentMinute = currentDate.getMinutes().toString().padStart(2, '0');
    const currentSecond = currentDate.getSeconds().toString().padStart(2, '0');
  
    const currentTimeString = `${currentHour}:${currentMinute}:${currentSecond}`;
    
    document.getElementById('time').textContent = currentTimeString;
  }
  updateTime();
  setInterval(updateTime, 1000);
  


const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const dayOfWeek = today.getDay();

const currentDay = document.querySelector('.day');

const currentDayOfWeek = daysOfWeek[dayOfWeek];
currentDay.innerHTML = currentDayOfWeek;

