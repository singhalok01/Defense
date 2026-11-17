const time = document.querySelector("#time");
const date = document.querySelector("#date");
const day = document.querySelector("#day");

function updateClock() {

    const now = new Date();

    // Time
    time.textContent = now.toLocaleTimeString();

    // Date
    date.textContent = now.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    // Day
    day.textContent = now.toLocaleDateString("en-IN", {
        weekday: "long"
    });
}

// Run immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);