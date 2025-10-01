// Add this to your existing script.js

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.graphics-card');

    cards.forEach(card => {
        const images = card.querySelector('.graphics-images');
        const dots = card.querySelectorAll('.dot');
        const prevBtn = card.querySelector('.slider-btn.prev');
        const nextBtn = card.querySelector('.slider-btn.next');
        let currentSlide = 0;

        // Function to update slide position
        function updateSlide() {
            images.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Update dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        // Next slide
        function nextSlide() {
            currentSlide = (currentSlide + 1) % 3;
            updateSlide();
        }

        // Previous slide
        function prevSlide() {
            currentSlide = (currentSlide - 1 + 3) % 3;
            updateSlide();
        }

        // Event listeners
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateSlide();
            });
        });
    });
});