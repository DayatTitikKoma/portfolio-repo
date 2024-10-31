document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Pesan Anda telah dikirim!');
    this.reset();
});
