$(document).ready(function(){
var x = ['10px','100px','200px'];
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
	$('.smallarticle5').removeClass('none');
	$('.smallarticle5').css('float', 'none');
	$('.smallarticle6').removeClass('none');
	$('.smallarticle6').css('float', 'none');
	$('.smallarticle7').removeClass('none');
	$('.smallarticle7').css('float', 'none');
	$('.smallarticle8').removeClass('none');
	$('.smallarticle8').css('float', 'none');
	$('#container').animate({top: '220px', left: '20px'}, 500);
	$('.article1').removeClass('none');
	$('.article2').addClass('none');
	$('.article3').addClass('none');
	$('.article4').addClass('none');
	$('.article5').addClass('none');
	$('.article6').addClass('none');
	$('.article7').addClass('none');
	$('.article8').addClass('none');
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
	$('.smallarticle5').removeClass('none');
	$('.smallarticle5').css('float', 'none');
	$('.smallarticle6').removeClass('none');
	$('.smallarticle6').css('float', 'none');
	$('.smallarticle7').removeClass('none');
	$('.smallarticle7').css('float', 'none');
	$('.smallarticle8').removeClass('none');
	$('.smallarticle8').css('float', 'none');
	$('#container').animate({top: '220px', left: '20px'}, 500);
	$('.article1').addClass('none');
	$('.article2').removeClass('none');
	$('.article3').addClass('none');
	$('.article4').addClass('none');
	$('.article5').addClass('none');
	$('.article6').addClass('none');
	$('.article7').addClass('none');
	$('.article8').addClass('none');
});
$('.smallarticle3').click(function(){
	$('#container').stop(true, false)
	$('.smallarticle3').addClass('none')
	$('.smallarticle2').removeClass('none');
	$('.smallarticle2').css('float', 'none');
	$('.smallarticle1').removeClass('none');
	$('.smallarticle1').css('float', 'none');
	$('.smallarticle4').removeClass('none');
	$('.smallarticle4').css('float', 'none');
	$('.smallarticle5').removeClass('none');
	$('.smallarticle5').css('float', 'none');
	$('.smallarticle6').removeClass('none');
	$('.smallarticle6').css('float', 'none');
	$('.smallarticle7').removeClass('none');
	$('.smallarticle7').css('float', 'none');
	$('.smallarticle8').removeClass('none');
	$('.smallarticle8').css('float', 'none');
	$('#container').animate({top: '220px', left: '20px'}, 500);
	$('.article1').addClass('none');
	$('.article2').addClass('none');
	$('.article3').removeClass('none');
	$('.article4').addClass('none');
	$('.article5').addClass('none');
	$('.article6').addClass('none');
	$('.article7').addClass('none');
	$('.article8').addClass('none');
});
$('.smallarticle4').click(function(){
	$('#container').stop(true, false)
	$('.smallarticle4').addClass('none')
	$('.smallarticle2').removeClass('none');
	$('.smallarticle2').css('float', 'none');
	$('.smallarticle3').removeClass('none');
	$('.smallarticle3').css('float', 'none');
	$('.smallarticle1').removeClass('none');
	$('.smallarticle1').css('float', 'none');
	$('.smallarticle5').removeClass('none');
	$('.smallarticle5').css('float', 'none');
	$('.smallarticle6').removeClass('none');
	$('.smallarticle6').css('float', 'none');
	$('.smallarticle7').removeClass('none');
	$('.smallarticle7').css('float', 'none');
	$('.smallarticle8').removeClass('none');
	$('.smallarticle8').css('float', 'none');
	$('#container').animate({top: '220px', left: '20px'}, 500);
	$('.article1').addClass('none');
	$('.article2').addClass('none');
	$('.article3').addClass('none');
	$('.article4').removeClass('none');
	$('.article5').addClass('none');
	$('.article6').addClass('none');
	$('.article7').addClass('none');
	$('.article8').addClass('none');
});
$('.smallarticle5').click(function(){
	$('#container').stop(true, false)
	$('.smallarticle5').addClass('none')
	$('.smallarticle2').removeClass('none');
	$('.smallarticle2').css('float', 'none');
	$('.smallarticle3').removeClass('none');
	$('.smallarticle3').css('float', 'none');
	$('.smallarticle4').removeClass('none');
	$('.smallarticle4').css('float', 'none');
	$('.smallarticle1').removeClass('none');
	$('.smallarticle1').css('float', 'none');
	$('.smallarticle6').removeClass('none');
	$('.smallarticle6').css('float', 'none');
	$('.smallarticle7').removeClass('none');
	$('.smallarticle7').css('float', 'none');
	$('.smallarticle8').removeClass('none');
	$('.smallarticle8').css('float', 'none');
	$('#container').animate({top: '220px', left: '20px'}, 500);
	$('.article1').addClass('none');
	$('.article2').addClass('none');
	$('.article3').addClass('none');
	$('.article4').addClass('none');
	$('.article5').removeClass('none');
	$('.article6').addClass('none');
	$('.article7').addClass('none');
	$('.article8').addClass('none');
});
$('.smallarticle6').click(function(){
	$('#container').stop(true, false)
	$('.smallarticle6').addClass('none')
	$('.smallarticle2').removeClass('none');
	$('.smallarticle2').css('float', 'none');
	$('.smallarticle3').removeClass('none');
	$('.smallarticle3').css('float', 'none');
	$('.smallarticle4').removeClass('none');
	$('.smallarticle4').css('float', 'none');
	$('.smallarticle5').removeClass('none');
	$('.smallarticle5').css('float', 'none');
	$('.smallarticle1').removeClass('none');
	$('.smallarticle1').css('float', 'none');
	$('.smallarticle7').removeClass('none');
	$('.smallarticle7').css('float', 'none');
	$('.smallarticle8').removeClass('none');
	$('.smallarticle8').css('float', 'none');
	$('#container').animate({top: '220px', left: '20px'}, 500);
	$('.article1').addClass('none');
	$('.article2').addClass('none');
	$('.article3').addClass('none');
	$('.article4').addClass('none');
	$('.article5').addClass('none');
	$('.article6').removeClass('none');
	$('.article7').addClass('none');
	$('.article8').addClass('none');
});
$('.smallarticle7').click(function(){
	$('#container').stop(true, false)
	$('.smallarticle7').addClass('none')
	$('.smallarticle2').removeClass('none');
	$('.smallarticle2').css('float', 'none');
	$('.smallarticle3').removeClass('none');
	$('.smallarticle3').css('float', 'none');
	$('.smallarticle4').removeClass('none');
	$('.smallarticle4').css('float', 'none');
	$('.smallarticle5').removeClass('none');
	$('.smallarticle5').css('float', 'none');
	$('.smallarticle6').removeClass('none');
	$('.smallarticle6').css('float', 'none');
	$('.smallarticle1').removeClass('none');
	$('.smallarticle1').css('float', 'none');
	$('.smallarticle8').removeClass('none');
	$('.smallarticle8').css('float', 'none');
	$('#container').animate({top: '220px', left: '20px'}, 500);
	$('.article1').addClass('none');
	$('.article2').addClass('none');
	$('.article3').addClass('none');
	$('.article4').addClass('none');
	$('.article5').addClass('none');
	$('.article6').addClass('none');
	$('.article7').removeClass('none');
	$('.article8').addClass('none');
});
$('.smallarticle8').click(function(){
	$('#container').stop(true, false)
	$('.smallarticle8').addClass('none')
	$('.smallarticle2').removeClass('none');
	$('.smallarticle2').css('float', 'none');
	$('.smallarticle3').removeClass('none');
	$('.smallarticle3').css('float', 'none');
	$('.smallarticle4').removeClass('none');
	$('.smallarticle4').css('float', 'none');
	$('.smallarticle5').removeClass('none');
	$('.smallarticle5').css('float', 'none');
	$('.smallarticle6').removeClass('none');
	$('.smallarticle6').css('float', 'none');
	$('.smallarticle7').removeClass('none');
	$('.smallarticle7').css('float', 'none');
	$('.smallarticle1').removeClass('none');
	$('.smallarticle1').css('float', 'none');
	$('#container').animate({top: '220px', left: '20px'}, 500);
	$('.article1').addClass('none');
	$('.article2').addClass('none');
	$('.article3').addClass('none');
	$('.article4').addClass('none');
	$('.article5').addClass('none');
	$('.article6').addClass('none');
	$('.article7').addClass('none');
	$('.article8').removeClass('none');
});
});