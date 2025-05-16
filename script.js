// Digital Clock
function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
    clock.innerHTML = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Stopwatch
let stopwatchInterval;
let elapsedSeconds = 0;
let running = false;

function startStopwatch() {
    if (!running) {
        running = true;
        stopwatchInterval = setInterval(() => {
            elapsedSeconds++;
            displayStopwatch();
        }, 1000);
    }
}

function stopStopwatch() {
    running = false;
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    stopStopwatch();
    elapsedSeconds = 0;
    displayStopwatch();
}

function displayStopwatch() {
    const stopwatch = document.getElementById("stopwatch");
    const hours = String(Math.floor(elapsedSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((elapsedSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(elapsedSeconds % 60).padStart(2, '0');
    stopwatch.innerHTML = `${hours}:${minutes}:${seconds}`;
}
