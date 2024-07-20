const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Send form data to server using AJAX or fetch API
    // For demonstration purposes, we'll just log the form data to the console
    console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`);

    // Reset form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
});