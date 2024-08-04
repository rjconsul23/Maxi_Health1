document.querySelector('form').addEventListener('submit', function(event) {
    const password = document.querySelector('#password').value;
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        event.preventDefault();
    }
});
