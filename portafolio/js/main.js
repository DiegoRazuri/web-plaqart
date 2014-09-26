// INFORMACIÓN DEL PORTAFOLIO

var baseDiseno = [
	{
		titulo : "IDENTIDAD DE MARCA",
		servicio : "DISEÑO GRÁFICO",
		cliente : "SCENS",
		img : "'img/portafolio_img/HomeS.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/scensPapeleria.html'"
	},
	{
		titulo : "IDENTIDAD DE MARCA",
		servicio : "DISEÑO GRÁFICO",
		cliente : "PROTEO",
		img : "'img/portafolio_img/HomeProte.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/proteoPapeleria.html'"
	},
	{
		titulo : "IDENTIDAD DE MARCA",
		servicio : "DISEÑO GRÁFICO",
		cliente : "SIGMA EQUIPMENT",
		img : "'img/portafolio_img/HomeSigma.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/diseno-logotipo-sigma.html'"
	},
	{
		titulo : "IDENTIDAD DE MARCA",
		servicio : "DISEÑO GRÁFICO",
		cliente : "XPRESS",
		img : "'img/portafolio_img/HomeX.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/xpressPapeleria.html'"
	},
	{
		titulo : "IMAGEN DE EVENTO",
		servicio : "DISEÑO GRÁFICO",
		cliente : "INDECOPI",
		img : "'img/portafolio_img/HomeID.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/diseno-indecopi.html'"
	},
	{
		titulo : "LOGOTIPOS",
		servicio : "DISEÑO GRÁFICO",
		cliente : "VARIOS",
		img : "'img/portafolio_img/HomeLogos.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/diseno-logos.html'"
	}
];

var baseDesarrolloWeb = [
	{
		titulo : "WEB INDUSTRIAL",
		servicio : "DESARROLLO WEB",
		cliente : "GEO SYSTEMS",
		img : "'img/portafolio_img/HomeGW.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/GeoWeb.html'"
	},
	{
		titulo : "WEB DE TURISMO",
		servicio : "DESARROLLO WEB",
		cliente : "PROTEO",
		img : "'img/portafolio_img/HomePW.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/proteoWeb.html'"
	},
	{
		titulo : "TIENDA VIRTUAL",
		servicio : "DESARROLLO WEB",
		cliente : "SCENS",
		img : "'img/portafolio_img/HomeSP.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/scensWeb.html'"
	},
	{
		titulo : "CATÁLOGO VIRTUAL",
		servicio : "DESARROLLO WEB",
		cliente : "VEMAEQUIP",
		img : "'img/portafolio_img/HomeVW.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/vemaequipWeb.html'"
	}
];

var baseImp = [
	{
		titulo : "VALLAS PUBLICITARIAS",
		servicio : "IMPRENTA",
		cliente : "INDECOPI",
		img : "'img/portafolio_img/HomeVI.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/indecopiVallas.html'"
	},
	{
		titulo : "AGENDAS PUBLICITARIAS",
		servicio : "IMPRENTA",
		cliente : "PEZWEON",
		img : "'img/portafolio_img/HomePz.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/pezweonPapeleria.html'"
	},
	{
		titulo : "VINILES AUTOADHESIVOS",
		servicio : "IMPRENTA",
		cliente : "SCENS",
		img : "'img/portafolio_img/HomeAS.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/impresiones-para-carros.html'"
	},
	{
		titulo : "CALENDARIOS DE ESCRITORIO",
		servicio : "IMPRENTA",
		cliente : "VEMAEQUIP",
		img : "'img/portafolio_img/HomeV.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/impresion-calendarios.html'"
	},
	{
		titulo : "IMAGEN DE EVENTO",
		servicio : "IMPRENTA",
		cliente : "CGR",
		img : "'img/portafolio_img/HomeCGR.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/imprenta-CGR.html'"
	}
];

var baseMerch = [
	{
		titulo : "ARTICULOS PUBLICITARIOS",
		servicio : "MERCHANDISING",
		cliente : "INDECOPI",
		img : "'img/portafolio_img/HomeL.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/indecopiMerch.html'"
	},
	{
		titulo : "MALETINES EJECUTIVOS",
		servicio : "MERCHANDISING",
		cliente : "INDECOPI",
		img : "'img/portafolio_img/HomeI.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/indecopiMaletines.html'"
	},
	{
		titulo : "CONFERENCIA",
		servicio : "MERCHANDISING",
		cliente : "TECNOFOR",
		img : "'img/portafolio_img/HomeT.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/merchandising-tecnofor.html'"
	},
	{
		titulo : "FIDELIZACIÓN",
		servicio : "MERCHANDISING",
		cliente : "PLAQART",
		img : "'img/portafolio_img/HomeP.jpg'",
		enlace : "'http://www.plaqart.com/portafolio/merchandising-innovador.html'"
	}
];




$(document).ready(function(){

	ventana_ancho = $(window).width();

	$('#btnNav3 div .scrolleable').on('click',function (e){
		e.preventDefault();
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

	//RENDER DE EL PORTAFOLIO

	var itemsTemplate = _.template($('#items-template').html());
	var activarRenderBaseDiseno = itemsTemplate({ conexionTemplate : baseDiseno});
	var activarRenderBaseWeb = itemsTemplate({ conexionTemplate : baseDesarrolloWeb});
	var activarRenderBaseImp = itemsTemplate({ conexionTemplate : baseImp});
	var activarRenderBaseMerch = itemsTemplate({ conexionTemplate : baseMerch});

	var baseXRenderear = $(".ui-selected").attr("id");
	console.log(baseXRenderear);
	
	switch(baseXRenderear){
		case "btnDiseno": 
			$('#vitrina').html(activarRenderBaseDiseno);
			break;
		case "btnWeb": 
			$('#vitrina').html(activarRenderBaseWeb);
			break;
		case "btnImp": 
			$('#vitrina').html(activarRenderBaseImp);
			break;
		case "btnMerch": 
			$('#vitrina').html(activarRenderBaseMerch);
			break;
	}


	// INTERACCION DE BOTONES DEL PORTAFOLIO

	$(".listaBotonesPorta li").on("click", function(){
		var idbtn = $(this).attr("id");

		switch(idbtn){
			case "btnDiseno" : 
				$('#vitrina').html(activarRenderBaseDiseno);
				break;
			case "btnWeb" : 
				$('#vitrina').html(activarRenderBaseWeb);
				break;
			case "btnImp" : 
				$('#vitrina').html(activarRenderBaseImp);
				break;
			case "btnMerch" : 
				$('#vitrina').html(activarRenderBaseMerch);
				break;
			default: alert("Ocurrio un error");

		};
		
	});

	$(".listaBotonesPorta").selectable();


});
