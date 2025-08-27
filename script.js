console.log("JavaScript file loaded");

// function confirmRSVP() {
//     alert("Thank you for confirming your attendance! We look forward to celebrating with you!");
// }

// function submitNote() {
//     const note = document.getElementById("wedding-note-box").value;
//     if (note.trim()) {
//         alert("Gracias por tu mensaje: " + note);
//         document.getElementById("wedding-note-box").value = ""; // Clear the box
//     } else {
//         alert("Por favor escribe un mensaje antes de enviarlo.");
//     }
// }

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
const firebaseURL = 'https://weddingrsvp-1004-default-rtdb.firebaseio.com/attendees.json';

document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault();

    // Get input values from the form
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Validate inputs
    if (!name || !phone) {
        alert("Por favor completa todos los campos.");
        return;
    }

    console.log('Sending data:', { name, phone });

    // Send the data to Firebase
    fetch(firebaseURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            phone: phone,
            date: new Date().toISOString(), // Add a timestamp for reference
        }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to send data');
            }
            return response.json();
        })
        .then(data => {
            console.log('Response:', data);
            alert('Gracias por confirmar tu asistencia!');
            document.getElementById('rsvpForm').reset(); // Reset the form after submission
        })
        .catch(error => {
            console.error('Fetch Error:', error);
            alert('Hubo un error al enviar tus datos.');
        });
});

// WhatsApp Button Action
document.getElementById('whatsapp-button').addEventListener('click', function () {
    const name = document.getElementById('name')?.value.trim() || "";
    const phoneNumber = "+14808432660"; // Replace with your Wedding Planner's WhatsApp number
    const message = `Hola! Confirmo mi asistencia al evento. Mi nombre es ${name} `;

    // WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank'); // Open WhatsApp in a new tab
});

// Amazon Button Action
document.getElementById('amazon-button').addEventListener('click', function () {
    // amazonURL 
    const amazonURL = `https://www.amazon.com/wedding/share/diana-luis2025`;
    window.open(amazonURL, '_blank'); // Open WhatsApp in a new tab
});

// Countdown

function startCountdown() {
    console.log("Countdown function initiated");
    const eventDate = new Date("March 27, 2026 17:00:00").getTime();

    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const timeRemaining = eventDate - now;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("time-remaining").innerHTML = `
            ${days} Días ${hours} Horas ${minutes} Minutos ${seconds} Segundos
        `;

        if (timeRemaining < 0) {
            clearInterval(countdownInterval);
            document.getElementById("time-remaining").innerHTML = "¡El día ha llegado!";
        }
    }, 1000);
}
// Start the countdown on page load
window.onload = startCountdown;
