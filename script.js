document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Simple form validation message
    const message = document.getElementById('formMessage');
    message.textContent = "Thank you! We'll get back to you shortly.";
    message.style.color = 'green';

    // Clear the form
    this.reset();
});
