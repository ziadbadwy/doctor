let navBar = document.getElementById('navbarSupportedContent');
new WOW().init();
   /*/////////////////////-----------BURGER--------////////////////*/
   const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    $('.collapse').slideToggle();
    


    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    $('.collapse').slideToggle();
    menuOpen = false;
  }
});
/*wndow*/
$(window).scroll(function(){
    if($(window).scrollTop() >0) {
        $('.start').css(            
            'display',"none"

        );
        $('.navbar').css(
            'top',"0px"
        );
    }else{
        $('.start').css(
            'display',"block"


        );
        $('.navbar').css(
            'top',"25px"
        );

    }
    
});





$(document).ready(function() {

	/* This is basic - uses default settings */
	
	$("a#single_image").fancybox();
	
	/* Using custom settings */
	
	$("a#inline").fancybox({
		'hideOnContentClick': true
	});

	/* Apply fancybox to multiple items */
	
	$("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
	
});
/*social*/
$("#shareIconsCountInside").jsSocials({
    url: "http://www.google.com",
    text: "Google Search Page",
    showLabel: false,
    showCount: "inside",
    shares: ["twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp"]
    
});



