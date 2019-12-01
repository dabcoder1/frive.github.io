;(function($){
"use-strict";
    
$(document).ready(function(){

/* ==========================================
============= Table of Content JS ==============
=============================================
1. Site PreLoader JS
2. Isotope JS
3. Testimonial/Client Carousel JS
4. Navigation Menu JS
5. Smooth Scrolling on Navigation JS
6. Hero Text Type JS
7. Scroll on WoW at Animation JS
8. Portfolio Image Popup JS
=============================================*/

/*=========== Site PreLoader JS ===========*/
        $(window).on('load', function(){
            $(".frive_preloader").fadeOut(3000);
        });
    
/*=========== Isotope JS ===========*/
        $('#container').imagesLoaded(function() {
            // filter items on button click
            $('.filter-button-group').on( 'click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });
            var $grid = $('.grid_isotope').isotope({
                itemSelector: '.isotope_item',
                percentPosition: true,
                masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.isotope_item'
                }
            })
            
        });
        
        //Filter Buttons
        $('.portfolio_menu button').on('click', function(){
            $('.portfolio_menu button').removeClass('active_portfolio_btn');
            $(this).addClass('active_portfolio_btn');
        });
        
/*=========== Testimonial/Client Carousel JS ===========*/
        $(".client_carousel").owlCarousel({
			items: 1,
			//autoplay: true,
			loop: true,
			nav: false,
			dots: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
		});

		var dot = $(".client_carousel .owl-dot");
		dot.each(function(){
			var index =$(this).index();
			$(this).text(index + 1);
		});
       
/*========== Navigation Menu JS ===========*/
        //Main Menu
        $('header nav ul li a').on('click', function(){
            $('header nav ul li a').removeClass('active_nav_menu');
            $(this).addClass('active_nav_menu');
        });
        //SlickNav Menu
        $(function(){
            $('#menu2').slicknav();
        });
      
/*========== Smooth Scrolling on Navigation JS ===========*/
    	$(".slide_section").on('click', function(e){
    		var linkHref = $(this).attr("href");
    		$("html, body").animate({
    			scrollTop: $(linkHref).offset().top /* - headerHeight */
    		}, 1000);
    	e.preventDefault();
    	}); 

/*=========== Hero Text Type JS ===========*/
        var typed = new Typed('.type', {
            strings: [
                    'Mr. John Snow',
                    'a Web Developer',
                    'a Designer'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1500,
            startDelay: 1000,
            loop: true,
          smartBackspace: true // Default value
        });
       
/*=========== Scroll on WoW at Animation JS ===========*/
        new WOW().init();
        
/*=========== Portfolio Image Popup JS ===========*/
          $('.gallery-item').magnificPopup({
              type: 'image',
              gallery:{
                enabled:true
              }
            });
	});
})(jQuery);









