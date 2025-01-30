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
            icon.style.color = '';
        } else {
            icon.classList.remove('far');
            icon.classList.add('fas');
            icon.style.color = '#ff4444';
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

// Swiper başlatma
const gallerySwiper = new Swiper('.gallerySwiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    speed: 1000, // Geçiş animasyon süresi (ms)
    autoplay: {
        delay: 5000, // 5 saniye bekleme süresi
        disableOnInteraction: false, // Kullanıcı etkileşiminde bile devam et
        pauseOnMouseEnter: true, // Mouse hover durumunda duraklat
        waitForTransition: true // Geçiş bitmeden yeni geçişe başlama
    },
    effect: 'slide', // Geçiş efekti
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true // Dinamik bullet'lar
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            centeredSlides: false,
        },
        1024: {
            slidesPerView: 3,
            centeredSlides: false,
        },
        1280: {
            slidesPerView: 4,
            centeredSlides: false,
        },
    },
    // Progress bar ekleyelim
    on: {
        init: function () {
            this.el.querySelector('.autoplay-progress').innerHTML = `
                <div class="autoplay-progress-bar"></div>
            `;
        },
        autoplayTimeLeft: function (s, time, progress) {
            const progressBar = this.el.querySelector('.autoplay-progress-bar');
            progressBar.style.setProperty('--progress', 1 - progress);
        }
    }
});

// Mouse hover durumunda kontrolü geliştirelim
const swiperEl = document.querySelector('.gallerySwiper');
if (swiperEl) {
    swiperEl.addEventListener('mouseenter', () => {
        gallerySwiper.autoplay.pause();
    });
    swiperEl.addEventListener('mouseleave', () => {
        gallerySwiper.autoplay.resume();
    });
}

// Fancybox başlatma
$(document).ready(function() {
    $("[data-fancybox]").fancybox({
        buttons: [
            "zoom",
            "slideShow",
            "fullScreen",
            "download",
            "thumbs",
            "close"
        ],
        loop: true,
        protect: true,
        animationEffect: "zoom",
        transitionEffect: "slide",
        clickContent: function(current, event) {
            return current.type === "image" ? "zoom" : false;
        }
    });
}); 