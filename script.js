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




 
