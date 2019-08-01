 $(() => {
	svg4everybody();
});
$(document).ready(function () {

	$('.dropdown-item').hover(function() {
	  $(this).find('.header-nav__dropdown-wrapper,footer-nav__dropdown-wrapper').stop(true, true).delay(60).fadeIn(60);
	  $(this).toggleClass("active").animate(100);

	}, function() {
	  $(this).find('.header-nav__dropdown-wrapper,footer-nav__dropdown-wrapper').stop(true, true).delay(60).fadeOut(60);
	  $(this).toggleClass("active").animate(100);
	});

	$('#main-slider').owlCarousel({
    items: 1,
    loop: true,
		nav: true,
		navText: ["<img class='owl-nav-img' src='static/i/general/svg/next.svg'>","<img class='owl-nav-img' src='static/i/general/svg/next.svg'>"],
    dots: true
	});

	$('#slider-why,#slider-how').owlCarousel({
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1200: {
        items: 3
      }
    },
    loop: true,
		nav: true,
		navText: ["<img class='owl-nav-img' src='static/i/general/svg/next.svg'>","<img class='owl-nav-img' src='static/i/general/svg/next.svg'>"],
    dots: false
  });

	$('#about-slider').owlCarousel({
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1200: {
        items: 2
      }
    },
    loop: true,
		nav: true,
		navText: ["<img class='owl-nav-img' src='static/i/general/svg/next.svg'>","<img class='owl-nav-img' src='static/i/general/svg/next.svg'>"],
    dots: false
	});
	
});

$('.side-bar-button,#block-layer').click(function(j) {
	$('.side-bar,#block-layer,.side-bar-button').toggleClass('open');
	$('body').toggleClass('ovh');
});

  // machheight 
$(function() {
	$('.slide-item__descr').matchHeight();
	$('.slide-item__title').matchHeight();
	$('.doctor-card__post').matchHeight();
});
	// machheight end

	//галочка чекбокса
$('#gridCheck1').change(function(){
	if($(this).is(":checked")) {
			$('.consultation__form-checkbox-label').addClass('active');
			$('.form__input-time').attr('disabled', 'disabled').val('');
	} else {
			$('.consultation__form-checkbox-label').removeClass('active');
			$('.form__input-time').removeAttr('disabled', 'disabled');
	}
});
	//галочка чекбокса конец

// 	//обработчик формы
// 	jQuery(function($){ // use jQuery code inside this to avoid "$ is not defined" error
// 	$('#load-more-stories').click(function(){

// 		var button = $(this),
// 		data = {
// 			'action': 'loadmore_stories',
// 			'query': loadmore_stories_params.posts, // that's how we get params from wp_localize_script() function
// 			'page' : loadmore_stories_params.current_page
// 		};
 
// 		$.ajax({ // you can also use $.post here
// 			url : loadmore_stories_params.ajaxurl, // AJAX handler
// 			data : data,
// 			type : 'POST',
// 			success : function( data ){
// 				if( data ) { 
// 					data = JSON.parse(data);
// 					$('.blog-list').append(data['result']); // insert new posts
					
// 					loadmore_stories_params.current_page++;

// 					if ( data['end'] ) 
// 						button.remove(); // if last page, remove the button
 
// 					// you can also fire the "post-load" event here if you use a plugin that requires it
// 					// $( document.body ).trigger( 'post-load' );
// 				} else {
// 					button.remove(); // if no data, remove the button as well
// 				}
// 			}
// 		});
// 	});
// });
// 	//обработчик формы конец