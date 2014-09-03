$(document).ready(function(){

	ventana_ancho = $(window).width();

	$('#navPrincipal ul li div .scrolleable').on('click',function (e){
		// DESACTIVAMOS ESTA FUNCION PARA QUE NAVEGUE AL
		// HREF, ES UTIL EN EL HOME e.preventDefault();
		var strAncla = $(this).attr('href');
		var presize = $(strAncla).offset().top
		var size = presize - 83;

		$('body, html').stop(true, true).animate({
			scrollTop: size
		}, 1000);
	});

	// ANIMACION DE LA NAVEGACION PARA MOVILES


	if(ventana_ancho < 1208){
		$(".icon-menu").on("click", function(){
			$(".blqmovil").slideToggle();
		});

		$(".scrolleable").on("click", function (){
			$(".blqmovil").slideUp();
		});
	};
});
