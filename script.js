document.addEventListener('DOMContentLoaded', function() {
    // Çalma düğmesi durumu
    const playButton = document.querySelector('.fa-play').parentElement;
    let isPlaying = false;

    playButton.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (isPlaying) {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        } else {
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
        }
        isPlaying = !isPlaying;
    });

    // Beğeni düğmesi durumu
    const likeButton = document.querySelector('.fa-heart').parentElement;
    let isLiked = false;

    likeButton.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (isLiked) {
            icon.classList.remove('fas');
            icon.classList.add('far');
        } else {
            icon.classList.remove('far');
            icon.classList.add('fas');
            icon.style.color = '#1db954';
        }
        isLiked = !isLiked;
    });

    // Menü öğeleri için hover efekti
    const menuItems = document.querySelectorAll('nav li');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
}); 