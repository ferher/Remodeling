
var startingItem = 3;

$(document).ready(function() {
	$('.carrusel_data .carrusel_item').each(function(){	
		$('#carrusel').append( $(this).find('.image').html() );
	});
	createcarrusel();
	showCaption();
});

function createcarrusel(){
	$('div#carrusel').roundabout({
		startingChild: window.startingItem,
		childSelector: 'img',
		tilt: -4.5,
		minOpacity:1,
		minScale: .45,
		duration: 1000,
		clickToFocus: true,
		clickToFocusCallback: showCaption
	});
	createCustomButtons();
}

function createCustomButtons(){
	
	$('.nextItem').click(function(){
		hideCaption();
		$('div#carrusel').roundabout('animateToNextChild', showCaption);
	});
	
	$('.prevItem').click(function(){
		hideCaption();
		$('div#carrusel').roundabout('animateToPreviousChild', showCaption);
	});
	
	$('div#carrusel img').click(function(){
		hideCaption();
	});
}

function hideCaption(){
	$('#captions').animate({'opacity':0}, 250);
}

function showCaption(){
	var childInFocus = $('div#carrusel').data('roundabout').childInFocus
	var setCaption = $('.carrusel_data .carrusel_item .caption:eq('+childInFocus+')').html();
	$('#captions').html(setCaption);
	var newHeight = $('#captions').height()+'px';
	$('.caption_container').animate({'height':newHeight}, 500, function(){
		$('#captions').animate({'opacity':1}, 250);	
	});
	
}

