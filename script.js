function showMessage() {
    // Text anzeigen
    const message = document.getElementById('loveMessage');
    message.classList.add('show-text');

    // Herzen regnen lassen
    createHearts();
}

function createHearts() {
    const heartCount = 100;
    
    for(let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        
        // Zufällige Position und Animation
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.fontSize = (20 + Math.random() * 30) + 'px';
        
        document.body.appendChild(heart);

        // Herzen nach Animation entfernen
        setTimeout(() => heart.remove(), 3000);
    }
}


