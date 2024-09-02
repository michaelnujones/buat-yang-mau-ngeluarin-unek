(function() {
    emailjs.init("9rQXeYgG-OF24dkBd");

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        const templateParams = {
            from_name: name,
            message: message
        };

        emailjs.send('service_jtfja6f', 'template_1jslwhg', templateParams)
            .then(function(response) {
                alert('Pesan terkirim yeee!!');
            }, function(error) {
                alert('Gagal mengirim pesan. Silakan coba lagi nanti.');
            });
    });
})();
