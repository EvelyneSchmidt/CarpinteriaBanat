function toggleLanguage() {
    var button = document.getElementById('flag-button');
    var currentPage = window.location.href;
    var targetPage;

    if (button.classList.contains('spain')) {
        targetPage = 'index_es.html';
    } else {
        targetPage = 'index_en.html';
    }

    if (!currentPage.includes(targetPage)) {
        var currentFilename = currentPage.split('/').pop();
        var targetFilename = button.classList.contains('spain') ? currentFilename.replace('_en.html', '_es.html') : currentFilename.replace('_es.html', '_en.html');
        var newURL = currentPage.replace(currentFilename, targetFilename);
        window.location.href = newURL;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('flag-button');
    var currentPage = window.location.href;

    if (currentPage.includes('_en.html')) {
        button.classList.add('spain');
    } else if (currentPage.includes('_es.html')) {
        button.classList.add('uk');
    } else {
        // Default to English page if no specific language identifier is found in the URL
        button.classList.add('spain');
    }

    button.addEventListener('click', toggleLanguage);
});


window.onload = function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', function () {
        if (navbar.style.display === 'flex') {
            navbar.style.display = 'none';
        } else {
            navbar.style.display = 'flex';
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            navbar.style.display = 'flex';
        } else {
            navbar.style.display = 'none';
        }
    });

    if (window.innerWidth > 768) {
        navbar.style.display = 'flex';
    } else {
        navbar.style.display = 'none';
    }
};



//Swiper Script
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


