const messages = [
    "Are you sure?",
    "Dryyyyyy",
    "se are you stopid?",
    "I'll eat your boohole ;)",
    "Oh my god, My SHAYLAAAAA",
    "Square up",
    "DOITZ.",
    "I'll nut in you again",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}