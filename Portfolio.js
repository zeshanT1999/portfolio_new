// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple Form Validation (for a contact form)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function (e) {
            const emailInput = form.querySelector('input[type="email"]');
            if (!emailInput.value) {
                e.preventDefault();
                alert('Please enter your email address.');
            }
        });
    }
});
const toggleButton = document.querySelector('#dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
