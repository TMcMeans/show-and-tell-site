/* Modal */

// Get modal element
var modal = document.getElementById('simpleModal');

// Get open modal button
var modalBtn = document.getElementById('modalBtn');

// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal() {
	modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
	modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e) {
	if (e.target == modal) {
		modal.style.display = 'none';
	}
}


/* Slideshow */

// Get slider images
var sliderImages = document.querySelectorAll('.slide');

// Get left arrow
var arrowLeft = document.querySelector('#arrow-left');

// Get right arrow
var arrowRight = document.querySelector('#arrow-right');

// Create variable to represent which image is being used
var current = 0;

// Clear all images function 
function reset() {
	// Iterate over collection of slides 
	for (var i = 0; i < sliderImages.length; i++) {
		sliderImages[i].style.display = 'none';
	}
}


// Initializes slideshow
function startSlide() {
	reset();
	sliderImages[0].style.display = 'block';
}

//Show previous image 
function slideLeft() {
	reset();
	sliderImages[current - 1].style.display = 'block';
	current--;
}

// Listen for left arrow click
arrowLeft.addEventListener('click', function(){
	if(current === 0) {
		current = sliderImages.length;
	}
	slideLeft();
});

//Show next image
function slideRight() {
	reset();
	sliderImages[current + 1].style.display = 'block';
	current++;
}

// Listen for left arrow click
arrowRight.addEventListener('click', function(){
	if (current === sliderImages.length - 1) {
		current = -1; 
	}
	slideRight();
});

// Listen for right arrow click

startSlide();





