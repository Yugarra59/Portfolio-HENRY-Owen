

$(document).ready(function() {
    $('a[href*="#"]').on('click', function(event) {
      event.preventDefault();
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 2000);
    });
  });


  const carousel = document.querySelector('.carousel');
  const projects = document.querySelectorAll('.project');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  
  let currentProject = 0;
  
  function updateCarousel() {
    projects.forEach((project, index) => {
      if (index === currentProject) {
        project.style.opacity = 1;
        project.style.transform = 'scale(1)';
        project.style.pointerEvents = 'auto';
      } else {
        project.style.opacity = 0;
        project.style.transform = 'scale(0.5)';
        project.style.pointerEvents = 'none';
        }
    });
  }
  
  prevButton.addEventListener('click', () => {
    currentProject--;
    if (currentProject < 0) {
      currentProject = projects.length - 1;
    }
    updateCarousel();
  });
  
  nextButton.addEventListener('click', () => {
    currentProject++;
    if (currentProject >= projects.length) {
      currentProject = 0;
    }
    updateCarousel();
  });
  
 
  

 
  function toggler(){
    const icon = document.querySelector("#toggler");
    const menu = document.querySelector(".menu");
   

        if(icon.innerHTML == "menu"){
        icon.innerHTML = "close";
        menu.style.display = "block";
        }else{
        icon.innerHTML = "menu";
        menu.style.display = "none";
        }

    }

     
   


