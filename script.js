
    const form = document.getElementById('contactForm');
    const responseDiv = document.getElementById('formResponse');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche le rechargement de la page

        const formData = new FormData(form);

        // Pour voir les données dans la console (pour le débogage)
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        // Simule une soumission réussie
        responseDiv.innerHTML = 'Merci, ' + formData.get('name') + '! Votre message a été envoyé.';

        // Réinitialiser le formulaire
        form.reset();
    });





