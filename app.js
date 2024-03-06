
const newYears = '1 jan 2025';
const dayEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate -currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    dayEl.innerHTML = days;
    hoursEl.innerHTML = timeFormat(hours);
    minsEl.innerHTML = timeFormat(minutes);
    secondsEl.innerHTML = timeFormat(seconds);

}
// Initial Call

function timeFormat(time) {
    return time < 10 ? `0${time}` : time; //If time is less than 10, the expression '0${time}' is returned. The ${time} is a placeholder for the value of time.
}

countdown();

setInterval(countdown, 1000);