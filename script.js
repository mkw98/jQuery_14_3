$(function(){
	//this code will execute after the DOM is loaded
	var carouselList = $('#carousel ul');


	function changeSlide () {
		carouselList.animate({'marginLeft': '-400px'}, 500, moveFirstSlideAfterLast);

	}
	function moveFirstSlideAfterLast () {
		var firstItem = carouselList.find('li:first');
    		var lastItem = carouselList.find('li:last');
    		lastItem.after(firstItem);
   		carouselList.css({marginLeft:0});
	}
		setInterval(changeSlide, 3000);
});


