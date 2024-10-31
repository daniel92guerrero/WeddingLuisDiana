// script.js

function confirmRSVP() {
    alert("Thank you for confirming your attendance! We look forward to celebrating with you!");
}

// Countdown Function
function startCountdown() {
    const eventDate = new Date("October 4, 2025 16:00:00").getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const timeRemaining = eventDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById("time-remaining").innerHTML = `
            ${days} Dias ${hours} Horas ${minutes} Minutos ${seconds} Segundos
        `;

        // If countdown is over, display a message
        if (timeRemaining < 0) {
            clearInterval();
            document.getElementById("time-remaining").innerHTML = "¡El día ha llegado!";
        }
    }, 1000);
}

// Start the countdown on page load
window.onload = startCountdown;
