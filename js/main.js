$(document).ready(function() {
	//Active-nav-link
	$('.size_select').click(function() { 
	    $(".size_select").removeClass("active-size-link");
	    $(this).addClass("active-size-link");
	});
});


//Slide-show
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);

function nextSlide() {
    goToSlide(currentSlide+1);
}
function previousSlide() {
    goToSlide(currentSlide-1);
}
function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

//buttons
var next = document.getElementById('next');
var previous = document.getElementById('previous');
next.onclick = function() {
  
    nextSlide();
};
previous.onclick = function() {
    
    previousSlide();
};
//Slide-show