document.addEventListener('DOMContentLoaded', function() {
    const words = [
        "Дизайнер фронтенда",
        "Веб-дизайнер",
        "UI / UX-дизайнер",
        "Веб-разработчик",
        "Тестер ПО"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let typingSpan = document.getElementById("typing");
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (!isDeleting) {
            typingSpan.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentWord.length) {
                isDeleting = true;
                typingSpeed = 50; // Быстрее при удалении
                setTimeout(typeEffect, 1000); // Пауза перед удалением
                return;
            }
        } else {
            typingSpan.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typingSpeed = 100; // Нормальная скорость при печати
            }
        }
        
        setTimeout(typeEffect, typingSpeed);
    }

    // Запуск анимации
    typeEffect();
});
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active'); // Barcha havolalardan active o'chiriladi
            });
            // Faqat mos keluvchi havolaga active qo'shiladi
            let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
};

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};