$('.menu_icon').click(function(){
	$('.header_mobile').removeClass('is_not_active');
	$('.header_mobile').css({'z-index' : '5'});
	$('.presentation_btn').css({'z-index' : '0'});
});

$('.header_mobile_close').click(function(){
	$('.header_mobile').addClass('is_not_active');
	$('.header_mobile').css({'z-index' : '-1'});
	$('.presentation_btn').css({'z-index' : '5'});
});

$('.header_mobile_list_item').click(function(){
	$('.header_mobile').addClass('is_not_active').delay(5000);
	$('.header_mobile').css({'z-index' : '-1'});
	$('.presentation_btn').css({'z-index' : '5'});
});

$('#projet1').click(function(){
	$('.project_popin_1').removeClass('is_not_active');
});

$('.project_popin_1').click(function() {
	$('.project_popin_1').addClass('is_not_active');
});

$('#projet2').click(function(){
	$('.project_popin_2').removeClass('is_not_active');
});

$('.project_popin_2').click(function() {
	$('.project_popin_2').addClass('is_not_active');
});

$('#projet3').click(function(){
	$('.project_popin_3').removeClass('is_not_active');
});

$('.project_popin_3').click(function() {
	$('.project_popin_3').addClass('is_not_active');
});

$('.projet_popin_close').click(function(){
	$('.project_popin').toggleClass('is_not_active');
});

