
var $target = $('.animater'),

	 animationClass = 'animater-start';

	 function animeScroll() {
		 var documentTop = $(document).scrollTop();

		 $target.each(function() {
			 var itemtop = $(this).offset().top;
			 if(documentTop > itemtop){
				 $(this).addClass(animationClass);
			 }
			 else{
				$(this).removeClass(animationClass);
             }}
             )
            }
            animeScroll();