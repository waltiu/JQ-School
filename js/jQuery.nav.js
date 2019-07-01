
(function($){
		$.fn.nav=function(){
    $("#nav>ul>li:has(ul)").hover(function(){
        //show
        $(this).children('ul').slideDown();
    },function(){
        //hide
       $(this).children('ul').slideUp();
    })
	}
})(jQuery);
