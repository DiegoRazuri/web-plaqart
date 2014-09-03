// INFORMACIÓN DEL PORTAFOLIO

var baseDiseno = [
	{
		titulo : "TITULO1 Diseno",
		servicio : "SERVICIO1",
		cliente : "CLIENTE 1",
		img : "'img/Fondo-ciudad.png'",
		enlace : "'http://www.plaqart.com/portafolio/xpressPapeleria.html'"
	},
	{
		titulo : "TITULO2 Diseno",
		servicio : "SERVICIO2",
		cliente : "CLIENTE 2",
		img : "'img/Fondo-ciudad.png'",
		enlace : "'http://www.plaqart.com/portafolio/.html'"
	},
	{
		titulo : "TITULO3 Diseno",
		servicio : "SERVICIO3",
		cliente : "CLIENTE 3",
		img : "'img/Fondo-ciudad.png'",
		enlace : "'http://www.plaqart.com/portafolio/.html'"
	},
	{
		titulo : "TITULO4 Diseno",
		servicio : "SERVICIO4",
		cliente : "CLIENTE 4",
		img : "'img/Fondo-ciudad.png'",
		enlace : "'http://www.plaqart.com/portafolio/.html'"
	}
];

var baseDesarrolloWeb = [
	{
		titulo : "WEB INDUSTRIAL",
		servicio : "DESARROLLO WEB Y DISEÑO",
		cliente : "GEO SYSTEMS",
		img : "'img/Fondo-ciudad.png'",
		enlace : "'http://www.plaqart.com/portafolio/GeoWeb.html'"
	},
	{
		titulo : "WEB DE TURISMO",
		servicio : "DESARROLLO WEB, SESSIÓN FOTOGRÁFICA Y DISEÑO",
		cliente : "PROTEO",
		img : "'img/Fondo-ciudad.png'",
		enlace : "'http://www.plaqart.com/portafolio/proteoWeb.html'"
	},
	{
		titulo : "WEB PRODUCTO MASIVO",
		servicio : "DESARROLLO WEB Y DISEÑO",
		cliente : "SCENS",
		img : "'img/Fondo-ciudad.png'",
		enlace : "'http://www.plaqart.com/portafolio/scensWeb.html'"
	},
	{
		titulo : "WEB INDUSTRIA AUTOMOTRIZ",
		servicio : "DESARROLLO WEB Y EDICIÓN DE VIDEO",
		cliente : "VEMAEQUIP",
		img : "'img/Fondo-ciudad.png'",
		enlace : "'http://www.plaqart.com/portafolio/vemaequipWeb.html'"
	}
];

var baseImp = [
	{
		titulo : "VALLAS PUBLICITARIAS",
		servicio : "IMPRESIÓN E INSTALACIÓN",
		cliente : "INDECOPI",
		img : "'img/Fondo-ciudad.png'",
		enlace : "'http://www.plaqart.com/portafolio/indecopiVallas.html'"
	},
	{
		titulo : "PAPELERÍA TURISMO",
		servicio : "IMPRESIÓN Y DISEÑO",
		cliente : "PROTEO",
		img : "'img/Fondo-ciudad.png'",
		enlace : "'http://www.plaqart.com/portafolio/proteoPapeleria.html'"
	},
	{
		titulo : "AGENDAS",
		servicio : "IMPRESIÓN Y ACABADOS",
		cliente : "PEZWEON",
		img : "'img/Fondo-ciudad.png'",
		enlace : "'http://www.plaqart.com/portafolio/pezweonPapeleria.html'"
	},
	{
		titulo : "PAPELERÍA COMERCIAL",
		servicio : "IMPRESION Y DISEÑO",
		cliente : "SCENS",
		img : "'img/Fondo-ciudad.png'",
		enlace : "'http://www.plaqart.com/portafolio/scensPapeleria.html'"
	}
];

var baseMerch = [
	{
		titulo : "ARTICULOS PUBLICITARIOS",
		servicio : "IMPRESIÓN Y ACABADOS",
		cliente : "INDECOPI",
		img : "'img/Fondo-ciudad.png'",
		enlace : "'http://www.plaqart.com/portafolio/indecopiMerch.html'"
	},
	{
		titulo : "MALETINES EJECUTIVOS",
		servicio : "CONFECCIÓN Y DISEÑO",
		cliente : "INDECOPI",
		img : "'img/Fondo-ciudad.png'",
		enlace : "'http://www.plaqart.com/portafolio/indecopiMaletines.html'"
	},
	{
		titulo : "TITULO3 MERCH",
		servicio : "SERVICIO3",
		cliente : "CLIENTE 3",
		img : "'img/Fondo-ciudad.png'",
		enlace : "'http://www.plaqart.com/portafolio/.html'"
	},
	{
		titulo : "TITULO4 MERCH",
		servicio : "SERVICIO4",
		cliente : "CLIENTE 4",
		img : "'img/Fondo-ciudad.png'",
		enlace : "'http://www.plaqart.com/portafolio/.html'"
	}
];

$(document).ready(function(){

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
						
					}, 8000);
				}
			});
		}
	});


	ventana_ancho = $(window).width();

	if(ventana_ancho <= 768){
		$(".icon-menu").on("click", function(){
			$(".blqmovil").slideToggle();
		});
	}

	




});
