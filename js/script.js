// Selecteer de knop en het tekstvak
const button = document.getElementById('showMessageBtn');
const message = document.getElementById('message');

// kleuren om af te wisselen
const colors = ["red", "green", "blue", "orange", "purple"];
let colorIndex = 0;

// Voeg een klik-event toe
button.addEventListener('click', () => {
    message.textContent = "Hallo! Je hebt op de knop geklikt!";

// stel de kleur in
message.style.color = colors[colorIndex];
message.style.fontWeight = "bold";

// volgende kleur voorbereiden
colorIndex = (colorIndex + 1) % colors.length;

// bericht na 3 seconden weer leeg maken
setTimeout(() => {
    message.textContent = "";
  }, 3000);

});
