$(document).ready(function(){

	ventana_ancho = $(window).width();

	$('#navPrincipal ul li div .scrolleable').on('click',function (e){
		//DESACTIVAMOS ESTA FUNCION YA QUE ES UTIL SOLO PARA LA NAVEGACION
		// EN EL HOME, ACA SE DEBE DESACTIVAR PARA QUE NAVEGUE AL HOME
		// NUEVAMENTE e.preventDefault();
		var strAncla = $(this).attr('href');
		var presize = $(strAncla).offset().top
		var size = presize - 83;

		$('body, html').stop(true, true).animate({
			scrollTop: size
		}, 1000);
	});

	// ACTIVAR ANIMACION EN RESOLUCION MAYOR A 768PX

	if( ventana_ancho >=768){
		var t=setInterval(function(){saltenIcos();},3000);
	}

	function saltenIcos(){

		setTimeout(function(){
			saltaIco("#icoTabla");
		},100);
		setTimeout(function(){
			saltaIco("#icoOjo");
		},200);
		setTimeout(function(){
			saltaIco("#icoCubo");
		},300);
		setTimeout(function(){
			saltaIco("#icoFoco");
		},400);
		setTimeout(function(){
			saltaIco("#icoBara");
		},500);	

	};

	function saltaIco (idIco){

		$(idIco).animate({
			top : "-=50"
		}, 100);
		setTimeout(function (){
			$(idIco).animate({
				top : "+=50"
			}, 150);
		},60);
	};

	//ANIMACION DE MENU PARA MOVILES

	if(ventana_ancho < 1280){
		$(".icon-menu").on("click", function(){
			$(".blqmovil").slideToggle();
		});

		$(".scrolleable").on("click", function (){
			$(".blqmovil").slideUp();
		});
	}

});
