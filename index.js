

const currentTime = new Date().getTime();
const UTCTime = document.querySelector('#time');

UTCTime.innerHTML = currentTime;

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const dayOfWeek = today.getDay();

const currentDay = document.querySelector('.day');

const currentDayOfWeek = daysOfWeek[dayOfWeek];
currentDay.innerHTML = currentDayOfWeek;
console.log(currentDayOfWeek);
