// Click menu burguer

const burguerMenu = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');

const menuIsActive = () => {
	burguerMenu.classList.toggle('active');
	navMenu.classList.toggle('hidden')
};
burguerMenu.addEventListener('click', menuIsActive);

// Scroll suave para link interno

$('nav a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('nav').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 300);
});

// // Debounce do Lodash
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// Animação ao Scroll
(function(){
	var $target = $('.scroll'),
			animationClass = 'scroll-start',
			offset = $(window).height() * 3/4;

	function animScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
				if(this.id == 'skill'){
					skill();
				}
			} else {
				$(this).removeClass(animationClass);
				if(this.id == 'skill'){
					cancelSkill();
				}
			}
		});
	}

	animScroll();

	$(document).scroll(debounce(function(){
		animScroll();
	}, 20));
})();

// Barra de habilidades

function skill(){
	let progressBars = document.querySelectorAll('.progress-bar');
    let values = [
        '60%',
        '53%',
        '45%',
        '55%',
    ];
    progressBars.forEach((progress,index)=>{
        progress.style.width = values[index];
    })
}

function cancelSkill(){
	let progressBars = document.querySelectorAll('.progress-bar');
    let values = [
        '60%',
        '53%',
        '45%',
        '55%',
    ];
    progressBars.forEach((progress,index)=>{
        progress.style.width = '0%';
    })
}