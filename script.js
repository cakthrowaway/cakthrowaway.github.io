let clickCount = 0;

document.addEventListener('click', function(event) {
    // Increment the click count
    clickCount++;
    document.getElementById('clickCount').textContent = clickCount;

    // Create and display a heart at a random position
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
