$(document).ready(function(){
var x = ['300px','400px','500px'];
var y = ['300px','350px','400px'];
function animateposition(){
	$('#container').animate({top: y[Math.floor(Math.random() * y.length)],
						 left: x[Math.floor(Math.random() * x.length)]},
						 6000,
						 animateposition);
};
animateposition();
$('.smallarticle1').click(function(){
	$('#container').stop(true, false)
	$('.smallarticle1').addClass('none')
	$('.smallarticle2').removeClass('none');
	$('.smallarticle2').css('float', 'none');
	$('.smallarticle3').removeClass('none');
	$('.smallarticle3').css('float', 'none');
	$('.smallarticle4').removeClass('none');
	$('.smallarticle4').css('float', 'none');
	$('#container').animate({top: '220px', left: '20px'}, 500);
	$('.article1').removeClass('none');
	$('.article2').addClass('none');
	$('.article3').addClass('none');
	$('.article4').addClass('none');
});
$('.smallarticle2').click(function(){
	$('#container').stop(true, false)
	$('.smallarticle2').addClass('none')
	$('.smallarticle1').removeClass('none');
	$('.smallarticle1').css('float', 'none');
	$('.smallarticle3').removeClass('none');
	$('.smallarticle3').css('float', 'none');
	$('.smallarticle4').removeClass('none');
	$('.smallarticle4').css('float', 'none');
	$('#container').animate({top: '220px', left: '20px'}, 500);
	$('.article1').addClass('none');
	$('.article2').removeClass('none');
	$('.article3').addClass('none');
	$('.article4').addClass('none');
});
$('.smallarticle3').click(function(){
	$('#container').stop(true, false)
	$('.smallarticle3').addClass('none')
	$('.smallarticle1').removeClass('none');
	$('.smallarticle1').css('float', 'none');
	$('.smallarticle2').removeClass('none');
	$('.smallarticle2').css('float', 'none');
	$('.smallarticle4').removeClass('none');
	$('.smallarticle4').css('float', 'none');
	$('#container').animate({top: '220px', left: '20px'}, 500);
	$('.article1').addClass('none');
	$('.article2').addClass('none');
	$('.article3').removeClass('none');
	$('.article4').addClass('none');
});
$('.smallarticle4').click(function(){
	$('#container').stop(true, false)
	$('.smallarticle4').addClass('none')
	$('.smallarticle1').removeClass('none');
	$('.smallarticle1').css('float', 'none');
	$('.smallarticle3').removeClass('none');
	$('.smallarticle3').css('float', 'none');
	$('.smallarticle2').removeClass('none');
	$('.smallarticle2').css('float', 'none');
	$('#container').animate({top: '220px', left: '20px'}, 500);
	$('.article1').addClass('none');
	$('.article2').addClass('none');
	$('.article3').addClass('none');
	$('.article4').removeClass('none');
});









});

