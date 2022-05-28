// MOBILE NAV

let burger = document.querySelector('#navToggle');
let nav = document.querySelector('#nav');
let wrapper = document.querySelector('.wrapper');


burger.addEventListener('click', function (event) {
	event.preventDefault();

	nav.classList.toggle('show');

	burger.classList.toggle('active');

	wrapper.classList.toggle('look')
})

// VIDEO

let video = document.querySelector('#corona-video');
let play = document.querySelector('#play');

play.addEventListener('click', function() {

	function toggleOverlay(event) {
		if (event.type === 'mouseleave') {
			play.classList.add('hidden');
		} else {
			play.classList.remove('hidden');
		}
	}

if(video.paused) {
	video.play();
	play.src = '/video/pause.svg';

	play.onmouseleave = toggleOverlay;
	play.onmouseenter = toggleOverlay;
} else {
	video.pause();
	play.src = '/video/play.svg';
}

	
})