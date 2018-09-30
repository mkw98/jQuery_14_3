$(function(){
	//this code will execute after the DOM is loaded
	var carouselList = $('#carousel ul');
	var firstItem = carouselList.find('li:first');
    var lastItem = carouselList.find('li:last');


	/*function moveCarousel () {
		var play = setInterval(changeSlide, 3000);
	}

	moveCarousel ();

	/*setInterval(changeSlide, 3000); //every 3 seconds, it performs a function to change the slide */

	function changeSlide () {
		carouselList.animate({'marginLeft': '-400px'}, 500, 'swing', moveFirstSlideAfterLast);

	}
	function moveFirstSlideAfterLast () {
		var firstItem = carouselList.find('li:first');
    	var lastItem = carouselList.find('li:last');
    	lastItem.after(firstItem);
   		carouselList.css({marginLeft:0});
	}
		setInterval(changeSlide, 3000);
});


