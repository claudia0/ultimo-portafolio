$( document ).ready(function(){

	$(".button-collapse").sideNav();
	
	$('.btnSobreMi').click(function() {
		window.location = "#sobreMi";
		$(".button-collapse").sideNav()
	});

	$('.btnWeb').click(function() {
		window.location = "#web";
		$(".button-collapse").sideNav()
	});

	$('.btnContacto').click(function() {
		window.location = "#contacto";
		$(".button-collapse").sideNav()
	});
    
    $('.btnProyectos').click(function() {
		window.location = "#proyectos";
		$(".button-collapse").sideNav()
	});

      $('.slider').slider({full_width: true});
      // Pause slider
    $('.slider').slider('pause');
// Start slider
    $('.slider').slider('start');
// Next slide
    $('.slider').slider('next');
// Previous slide
    $('.slider').slider('prev');
    
    });

 

  
  // Show sideNav
  