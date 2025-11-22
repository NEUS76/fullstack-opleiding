// ===== Berichtknop =====
const button = document.getElementById('showMessageBtn');
const message = document.getElementById('message');

// kleuren om af te wisselen
const colors = ["red", "green", "blue", "orange", "purple"];
let colorIndex = 0;

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

// ===== Alert-knop =====
document.getElementById('alertBtn').addEventListener('click', () => {
    alert("Dit is een alert bericht!");
});

// ===== Achtergrondkleur-knop =====
document.getElementById('bgBtn').addEventListener('click', () => {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});

// ===== Lijstitem toevoegen-knop =====
document.getElementById('addItemBtn').addEventListener('click', () => {
    const list = document.getElementById('dynamiclist');
    const newItem = document.createElement('li');
    newItem.textContent = "Nieuw item toegevoegd!";
    list.appendChild(newItem);
});

// --- Lijstitem verwijderen knop ---
document.getElementById('removeItemBtn').addEventListener('click', () => {
    const list = document.getElementById('dynamiclist');
    // Controleer of er meer dan 0 items zijn
    if (list.children.length > 0) {
        list.removeChild(list.lastElementChild);
    } else {
        alert("Er zijn geen items om te verwijderen!");
    }
});

