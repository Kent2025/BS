  // Navigation mit Herz-Effekt
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');

        // Herz-Effekt erstellen
        const heart = document.createElement('div');
        heart.className = 'heart-effect';
        heart.innerHTML = '❤️';
        heart.style.left = e.pageX - 50 + 'px';
        heart.style.top = e.pageY - 50 + 'px';
        document.body.appendChild(heart);

        // Sektionen wechseln
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });
        document.querySelector(targetId).classList.add('active');

        // Herz nach Animation entfernen
        setTimeout(() => heart.remove(), 800);
    });
});




 
 
 
 
function showMessage() {
    // Text anzeigen
    const message = document.getElementById('loveMessage');
    message.classList.add('show-text');

    // Herzen regnen lassen
    createHearts();
}

function createHearts() {
    const heartCount = 50;
    
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

 
