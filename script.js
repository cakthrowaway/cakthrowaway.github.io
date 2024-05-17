document.addEventListener('click', function(event) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';
    document.body.appendChild(heart);

    const x = Math.random() * (window.innerWidth - 20);
    const y = Math.random() * (window.innerHeight - 20);

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    setTimeout(() => {
        heart.remove();
    }, 1000);
});
