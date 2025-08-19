document.addEventListener('DOMContentLoaded', function() {
	const toggleBtn = document.getElementById('theme-toggle');
	toggleBtn.addEventListener('click', function() {
		document.body.classList.toggle('dark-mode');
	});
});
