console.log("JavaScript file loaded");

// function confirmRSVP() {
//     alert("Thank you for confirming your attendance! We look forward to celebrating with you!");
// }

function submitNote() {
    const note = document.getElementById("wedding-note-box").value;
    if (note.trim()) {
        alert("Gracias por tu mensaje: " + note);
        document.getElementById("wedding-note-box").value = ""; // Clear the box
    } else {
        alert("Por favor escribe un mensaje antes de enviarlo.");
    }
}

// function sendRSVP() {
//     const name = document.getElementById("rsvp-name").value.trim();
//     const lastname = document.getElementById("rsvp-lastname").value.trim();
//     if (name && lastname) {
//         alert(`Gracias por confirmar, ${name} ${lastname}!`);
//         document.getElementById("rsvp-name").value = "";
//         document.getElementById("rsvp-lastname").value = "";
//     } else {
//         alert("Por favor completa ambos campos antes de confirmar.");
//     }
// }

// RSVP Form Submission to Google Sheets
document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Fetching values from the form
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Validate input
    if (!name || !phone) {
        alert("Por favor completa todos los campos.");
        return;
    }

    // Google Apps Script URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzCLu8m-jnTIjpros4XaG4Z1gjb9Oi5eroFP6OMqCeVZiUNaA8VhuzemneBVroQt-bvbA/exec';

    // Sending the data using fetch
    fetch(scriptURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone })
    })
    .then(response => {
        if (response.ok) {
            alert('Gracias por confirmar tu asistencia!');
            document.getElementById('rsvpForm').reset(); // Clear the form after submission
        } else {
            throw new Error('Hubo un problema al enviar tus datos.');
        }
    })
    .catch(error => console.error('Error:', error));
});


// WhatsApp Button Action
document.getElementById('whatsapp-button').addEventListener('click', function () {
    const name = document.getElementById('name')?.value.trim() || "Invitado";
    const phoneNumber = "+16027024416"; // Replace with your Wedding Planner's WhatsApp number
    const message = `Hola! Confirmo mi asistencia al evento. Mi nombre es ${name}.`;

    // WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank'); // Open WhatsApp in a new tab
});


// Countdown

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
