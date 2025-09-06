let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Typing animation with icons
document.addEventListener("DOMContentLoaded", function () {
    const words = [
        '<i class="fab fa-node-js"></i> NestJs Developer',
        '<i class="fab fa-laravel"></i> Laravel Developer',
        '<i class="fas fa-user-graduate"></i> 4th-year ITE student',
    ];

    const typingTextElement = document.getElementById('typing-text');
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];

        // Slice only the text part, not partial HTML tags
        let tempDiv = document.createElement('div');
        tempDiv.innerHTML = currentWord;
        const fullText = tempDiv.textContent; // Get pure text for typing

        let displayedText = fullText.substring(0, charIndex);

        // Preserve the icon
        const iconHTML = currentWord.substring(0, currentWord.indexOf(fullText));
        typingTextElement.innerHTML = iconHTML + displayedText;

        if (!isDeleting) {
            charIndex++;
        } else {
            charIndex--;
        }

        if (charIndex === fullText.length + 1) {
            isDeleting = true;
            setTimeout(type, 2000);
            return;
        }

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
            return;
        }

        const typingSpeed = isDeleting ? 70 : 120;
        setTimeout(type, typingSpeed);
    }

    type();
});
