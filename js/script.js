$(document).ready(function(){
    $('.slider_inner').slick();
	function slickify(){
	$('.steel_items-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1
	});
	}
	slickify()
	$(window).resize(function(){
		$windowWidth = $(window).width();
		if ($windowWidth <= 1200) {
			$('.steel_items').addClass('steel_items-slider');
			slickify();   
		}
	});
	$('.impact_mobile-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1
	});

	// magnific

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});

	$('#modal-btn-on').click(function(){
        $('.fixed-overlay,.modal-back').addClass('active');
		$('body').css("overflow", "hidden")
    })
	$('#modal-btn-on2').click(function(){
        $('.fixed-overlay,.modal-back').addClass('active');
		$('body').css("overflow", "hidden")
    })
	$('.close,.modal-back').click(function(event){
        $('.fixed-overlay,.modal-back').removeClass('active');
		$('body').css("overflow", "auto")
    })
	$("#phone,#phone2").mask("8(999) 999-99-99");
})

let center = [59.89274856421049,30.4065488306885];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 17
	}),
	myPlacemark = new ymaps.Placemark(map.getCenter(), {
		}, 
		{

		iconLayout: 'default#image',

		iconImageHref: 'img/icon/map-icon.png',

		iconImageSize: [200, 66],

		iconImageOffset: [-25, -60]
	  
	});
	map.controls.remove('geolocationControl'); // удаляем геолокацию
  	map.controls.remove('searchControl'); // удаляем поиск
  	map.controls.remove('trafficControl'); // удаляем контроль трафика
  	map.controls.remove('typeSelector'); // удаляем тип
  	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  	map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  	map.controls.remove('rulerControl'); // удаляем контрол правил
  	map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
	
	map.geoObjects.add(myPlacemark)
}
ymaps.ready(init);

  $("form").submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "mail.php", //Change
		data: th.serialize()
	}).done(function() {
		window.location.href = 'thanks-page.html';
		setTimeout(function() {
			// Done Functions
			th.trigger("reset");
		}, 1000);
	});
	return false;
});

$('img.mini-icon').each(function(){
	var $img = jQuery(this);
	var imgID = $img.attr('id');
	var imgClass = $img.attr('class');
	var imgURL = $img.attr('src');

	$.get(imgURL, function(data) {
		var $svg = jQuery(data).find('svg');

		if(typeof imgID !== 'undefined') {
			$svg = $svg.attr('id', imgID);
		}
		if(typeof imgClass !== 'undefined') {
			$svg = $svg.attr('class', imgClass+' replaced-svg');
		}

		$svg = $svg.removeAttr('xmlns:a');

		$img.replaceWith($svg);

	}, 'xml');

});
