console.log("JavaScript file loaded");

function confirmRSVP() {
    alert("Thank you for confirming your attendance! We look forward to celebrating with you!");
}

function startCountdown() {
    console.log("Countdown function initiated");
    const eventDate = new Date("October 4, 2025 17:00:00").getTime();

    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const timeRemaining = eventDate - now;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("time-remaining").innerHTML = `
            ${days} Dias ${hours} Horas ${minutes} Minutos ${seconds} Segundos
        `;

        if (timeRemaining < 0) {
            clearInterval(countdownInterval);
            document.getElementById("time-remaining").innerHTML = "¡El día ha llegado!";
        }
    }, 1000);
}

// Start the countdown on page load
window.onload = startCountdown;
