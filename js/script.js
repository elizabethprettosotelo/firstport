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
});
