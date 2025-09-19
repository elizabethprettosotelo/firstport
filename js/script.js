document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('theme-toggle');
  toggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });

  // Setup GIF hover effects for experience cards
  const experienceImages = document.querySelectorAll('.experience-img[data-gif]');
  experienceImages.forEach(img => {
    const gifUrl = img.getAttribute('data-gif');
    img.style.setProperty('--gif-url', `url('${gifUrl}')`);
  });

  // Carousel functionality
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const dotContainer = document.querySelector('.carousel-btn-container');
  const caption = document.getElementById('carousel-caption');

  const captions = [
    "I'm a designer!",  // for graphicing.png
    "I'm a programmer!", // for coding.png
    "And a creative through and through!" // for arting.png
  ];

  let currentIndex = 0;
  const slideWidth = slides[0].getBoundingClientRect().width;

  // Arrange slides next to each other
  slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
  });

  // Generate dots dynamically
  slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.classList.add('carousel-btn');
    if (idx === 0) dot.classList.add('active');
    dotContainer.appendChild(dot);
  });

  const dots = Array.from(dotContainer.children);

  function updateCaption(index) {
    caption.classList.remove('show');
    setTimeout(() => {
      caption.textContent = captions[index];
      caption.classList.add('show');
    }, 200); // smooth fade timing
  }

  function goToSlide(index) {
    track.style.transform = `translateX(-${index * slideWidth}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    updateCaption(index);
  }

  // Initial display
  caption.textContent = captions[currentIndex];
  caption.classList.add('show');

  // Dot click functionality
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      currentIndex = idx;
      goToSlide(currentIndex);
    });
  });

  // Auto-scroll every 3 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
  }, 3000);
});
