// INFORMACIÓN DEL PORTAFOLIO

var baseDiseno = [
	{
		titulo : "PAPELERIA COMERCIAL",
		servicio : "DISEÑO",
		cliente : "SCENS",
		img : "'img/portafolio_img/HomeS.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/scensPapeleria.html'"
	},
	{
		titulo : "VOLANTES Y PAPELERIA",
		servicio : "DISEÑO",
		cliente : "PROTEO",
		img : "'img/portafolio_img/HomeProte.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/proteoPapeleria.html'"
	},
	{
		titulo : "LOGOTIPO Y CARPETAS",
		servicio : "DISEÑO",
		cliente : "SIGMA EQUIPMENT",
		img : "'img/portafolio_img/HomeSigma.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/diseno-logotipo-sigma.html'"
	},
	{
		titulo : "PAPELERIA NEGOCIOS",
		servicio : "DISEÑO",
		cliente : "XPRESS",
		img : "'img/portafolio_img/HomeX.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/xpressPapeleria.html'"
	}
];

var baseDesarrolloWeb = [
	{
		titulo : "WEB INDUSTRIAL",
		servicio : "DESARROLLO WEB Y DISEÑO",
		cliente : "GEO SYSTEMS",
		img : "'img/portafolio_img/HomeGW.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/GeoWeb.html'"
	},
	{
		titulo : "WEB DE TURISMO",
		servicio : "DESARROLLO WEB, SESSIÓN FOTOGRÁFICA Y DISEÑO",
		cliente : "PROTEO",
		img : "'img/portafolio_img/HomePW.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/proteoWeb.html'"
	},
	{
		titulo : "WEB PRODUCTO MASIVO",
		servicio : "DESARROLLO WEB Y DISEÑO",
		cliente : "SCENS",
		img : "'img/portafolio_img/HomeSP.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/scensWeb.html'"
	},
	{
		titulo : "WEB INDUSTRIA AUTOMOTRIZ",
		servicio : "DESARROLLO WEB Y EDICIÓN DE VIDEO",
		cliente : "VEMAEQUIP",
		img : "'img/portafolio_img/HomeVW.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/vemaequipWeb.html'"
	}
];

var baseImp = [
	{
		titulo : "VALLAS PUBLICITARIAS",
		servicio : "IMPRESIÓN E INSTALACIÓN",
		cliente : "INDECOPI",
		img : "'img/portafolio_img/HomeVI.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/indecopiVallas.html'"
	},
	{
		titulo : "AGENDAS PUBLICITARIAS",
		servicio : "IMPRESIÓN Y ACABADOS",
		cliente : "PEZWEON",
		img : "'img/portafolio_img/HomePz.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/pezweonPapeleria.html'"
	},
	{
		titulo : "VINILES PARA CARROS",
		servicio : "IMPRESIÓN Y ACABADOS",
		cliente : "SCENS",
		img : "'img/portafolio_img/HomeAS.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/impresiones-para-carros.html'"
	},
	{
		titulo : "CALENDARIOS DE ESCRITORIO",
		servicio : "IMPRESION Y DISEÑO",
		cliente : "VEMAEQUIP",
		img : "'img/portafolio_img/HomeV.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/impresion-calendarios.html'"
	}
];

var baseMerch = [
	{
		titulo : "ARTICULOS PUBLICITARIOS",
		servicio : "IMPRESIÓN Y ACABADOS",
		cliente : "INDECOPI",
		img : "'img/portafolio_img/HomeL.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/indecopiMerch.html'"
	},
	{
		titulo : "MALETINES EJECUTIVOS",
		servicio : "CONFECCIÓN Y DISEÑO",
		cliente : "INDECOPI",
		img : "'img/portafolio_img/HomeI.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/indecopiMaletines.html'"
	},
	{
		titulo : "LIBRETAS Y LAPICEROS",
		servicio : "IMPRESION Y GRABADO",
		cliente : "TECNOFOR",
		img : "'img/portafolio_img/HomeT.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/merchandising-tecnofor.html'"
	},
	{
		titulo : "MERCHANDISING",
		servicio : "VENTA Y GRABADO",
		cliente : "",
		img : "'img/portafolio_img/HomeP.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/merchandising-innovador.html'"
	}
];

$(document).ready(function(){

	ventana_ancho = $(window).width();

	// ANIMACIÓN DEL SCROLL

	$('#navPrincipal ul li div .scrolleable').on('click',function (e){
		e.preventDefault();
		var strAncla = $(this).attr('href');
		var presize = $(strAncla).offset().top
		var size = presize - 83;

		$('body, html').stop(true, true).animate({
			scrollTop: size
		}, 1000);
	});


	//RENDER DE EL PORTAFOLIO

	var itemsTemplate = _.template($('#items-template').html());
	var activarRenderBaseDiseno = itemsTemplate({ conexionTemplate : baseDiseno});
	var activarRenderBaseWeb = itemsTemplate({ conexionTemplate : baseDesarrolloWeb});
	var activarRenderBaseImp = itemsTemplate({ conexionTemplate : baseImp});
	var activarRenderBaseMerch = itemsTemplate({ conexionTemplate : baseMerch});


	$('#vitrina').html(activarRenderBaseDiseno);

	// INTERACCION DE BOTONES DEL PORTAFOLIO

	$(".listaBotonesPorta li").on("click", function(){
		var idbtn = $(this).attr("id");

		switch(idbtn){
			case "btnDiseno" : $('#vitrina').html(activarRenderBaseDiseno);
				break;

			case "btnWeb" : $('#vitrina').html(activarRenderBaseWeb);
				break;
			case "btnImp" : $('#vitrina').html(activarRenderBaseImp);
				break;
			case "btnMerch" : $('#vitrina').html(activarRenderBaseMerch);
				break;
			default: alert("Ocurrio un error");

		};
		
	});

	$(".listaBotonesPorta").selectable();

	// ANIMACION DE BOTONES REDES

	function aniRedes(idRed){

		$("#"+idRed).find(".btnOff").stop(true).fadeOut(300);
		$("#"+idRed).find(".btnOn").stop(true, true).fadeIn(300);
	};

	function aniRedesoff(idRed){
		$("#"+ idRed).find(".btnOff").stop(true, true).fadeIn(300);
		$("#"+idRed).find(".btnOn").stop(true, true).fadeOut(300);
	};



	$(".btnRedes").mouseover(function (e){
		e.preventDefault();
		var idRed = $(this).attr("id");
		aniRedes(idRed);
	});
	$(".btnRedes").mouseleave(function (e){
		e.preventDefault();
		var idRed = $(this).attr("id");
		aniRedesoff(idRed);
	});



	//VALIDACION DE FORM DE SECCION CONTACTO

	function validarForm(){
		if($("#nombre").val() == ""){
			alert("El campo Nombre no puede estar vacio");
			$("#nombre").focus();
			return false;
		}
		if($("#correo").val() == ""){
			alert("El campo Correo no puede estar vacio");
			$("#correo").focus();
			return false;
		}
		if($("#empresa").val() == ""){
			alert("El campo Servicio no puede estar vacio");
			$("#empresa").focus();
			return false;
		}
		if($("#mensaje").val() == ""){
			alert("El campo Servicio no puede estar vacio");
			$("#mensaje").focus();
			return false;
		}

		return true;		
	}

	$("#boton").click(function(){


		if(validarForm()){

			console.log("formulario validado");

			$.post("enviar.php",$("#formdata").serialize(),function(res){
				if(res==1){
					console.log(res);
					
					$("#mensajeExito").css("display", "block");
					setTimeout(function(){
						$("#mensajeExito").css("display", "none");$(location).attr("href","http://www.plaqart.com");
						
					}, 5000);
				}else{
					
					$("#mensajeError").css("display", "block");

					setTimeout(function(){
						$("#mensajeError").css("display", "none");
						
					}, 3000);
				}
			});
		}
	});

	// ANIMACIÓN ICONOS SECCION SERVICIOS

	var t=setInterval(function(){animBrillo();},4000);

	function animBrillo (){
		console.log("click")
		$(".brillo").animate({top: "+=250"}, 250);
		setTimeout( function (){
			$(".brillo").animate({top: "-=250"}, 200);
		}, 3000);


	};

	// ANIMACION DE LA NAVEGACION PARA MOVILES


	if(ventana_ancho <= 768){
		$(".icon-menu").on("click", function(){
			$(".blqmovil").slideToggle();
		});

		$(".scrolleable").on("click", function (){
			$(".blqmovil").slideUp();
		});
	}

});
