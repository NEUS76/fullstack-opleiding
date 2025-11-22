const button = document.getElementById('showMessageBtn');
const message = document.getElementById('message');

if (button && message) {
    button.addEventListener('click', () => {
        message.textContent = "Hallo! Je hebt op de knop geklikt! ";
    });
} else {
    console.error("Elementen niet gevonden! Controleer de id's en locatie van het script.");
}
