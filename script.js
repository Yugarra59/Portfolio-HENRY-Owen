
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


    $(document).ready(function() {
        // Smooth scroll for navigation links
        $(".nav-button").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                
                var hash = this.hash;
                
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 2000, function(){
                    window.location.hash = hash;
                });
            }
        });
    
        // Fade-in effect
        $('.fade-in').each(function() {
            var element = $(this);
            element.waypoint(function() {
                element.addClass('appear');
            }, { offset: '80%' });
        });
    });
    
    




