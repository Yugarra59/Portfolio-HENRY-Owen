$(document).ready(function() {
        
        $(".nav-button").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                
                let hash = this.hash;
                
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 2000, function(){
                    window.location.hash = hash;
                });
            }
        });
    
        
        $('.fade-in').each(function() {
            var element = $(this);
            element.waypoint(function() {
                element.addClass('appear');
            }, { offset: '80%' });
        });
    });

    
    let modal = document.getElementById('modal');
    let modalOkBtn = document.getElementById('modal-ok-btn');
    let closeModal = document.getElementsByClassName('close')[0];

    modal.style.display = "block"; // Afficher la modal au chargement de la page

    modalOkBtn.onclick = function() {
        modal.style.display = "none"; // Cacher la modal quand on clique sur OK
    }

    closeModal.onclick = function() {
        modal.style.display = "none"; // Cacher la modal quand on clique sur le bouton de fermeture
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none"; // Cacher la modal si on clique en dehors de la modal
        }
    }

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

    
    form.reset();
});
    
    
    




