$(document).ready(function(){

var tiempoEspera = 20000;



var t=setInterval(function(){avanzar2();},7500);
var tPromo=setInterval(function(){avanzarBannerPromos();},tiempoEspera);

	$('.btnAtras').click(function()
	{

		stopinterval(tPromo);

		var size = $('#promociones').find('.slidePorta').size();
		console.log(size)
		$('#promociones').find('.slidePorta').each(
			function(index,value){
				if($(value).hasClass('slide_visible_Porta'))
				{

					$(".paginacionPromo").each( function (){
						$(this).removeClass("paginaVisiblePromo");

					});

					$(value).fadeOut(1000);
					$(value).removeClass('slide_visible_Porta');
					
					if(index==0)
					{
						var idPaginaActual = $($('#promociones').find('.slidePorta').get(size-1)).attr("id");
						console.log(idPaginaActual);
						$("#" + idPaginaActual + "pagPromo").addClass("paginaVisiblePromo");
						$($('#promociones').find('.slidePorta').get(size-1)).fadeIn(1000);
						$($('#promociones').find('.slidePorta').get(size-1)).addClass('slide_visible_Porta');
						return false;
					}
					else
					{
						var idPaginaActual = $($('#promociones').find('.slidePorta').get(index-1)).attr("id");
						console.log(idPaginaActual);
						$("#" + idPaginaActual + "pagPromo").addClass("paginaVisiblePromo");
						$($('#promociones').find('.slidePorta').get(index-1)).fadeIn(1000);
						$($('#promociones').find('.slidePorta').get(index-1)).addClass('slide_visible_Porta');	
						return false;
					}
				}
		});
	});

	$('.btnAvanzar').click(function()
	{
		
		stopinterval(tPromo);

		
		var size = $('#promociones').find('.slidePorta').size();
		$('#promociones').find('.slidePorta').each(
			function(index,value){
				if($(value).hasClass('slide_visible_Porta'))
				{
					//var id_visible = $(value).attr("id");

					$(".paginacionPromo").each( function (){
						$(this).removeClass("paginaVisiblePromo");

					});

					$(value).fadeOut(1000);
					$(value).removeClass('slide_visible_Porta');
					
					if(index+1<size)
					{
						var idPaginaActual = $($('#promociones').find('.slidePorta').get(index+1)).attr("id");
						//console.log(idPaginaActual);
						$("#" + idPaginaActual + "pagPromo").addClass("paginaVisiblePromo");
						$($('#promociones').find('.slidePorta').get(index+1)).fadeIn(1000);
						$($('#promociones').find('.slidePorta').get(index+1)).addClass('slide_visible_Porta');
						return false;
					}
					else
					{
						var idPaginaActual = $($('#promociones').find('.slidePorta').get(0)).attr("id");
						console.log(idPaginaActual);
						$("#" + idPaginaActual + "pagPromo").addClass("paginaVisiblePromo");
						$($('#promociones').find('.slidePorta').get(0)).fadeIn(1000);
						$($('#promociones').find('.slidePorta').get(0)).addClass('slide_visible_Porta');	
						return false;
					}
				}
		});
		
		

	});

	


});
function stopinterval(tPromo){
	clearInterval(tPromo);
}



function avanzar2()
{
	var size = $('#banner').find('.slide').size();
		$('#banner').find('.slide').each(
			function(index,value){
				if($(value).hasClass('slide_visible'))
				{
					var id_visible = $(value).attr("id");
					//console.log(id_visible);
					$(".paginacion").each( function (){
						$(this).removeClass("paginaVisible");

					});
					$("#" + id_visible + "pag").addClass("paginaVisible");
					$(value).fadeOut(2000);
					setTimeout(function(){ $(value).removeClass('slide_visible'); }, 2000);
					//$(value).removeClass('slide_visible');
					
					if(index+1<size)
					{
						$($('#banner').find('.slide').get(index+1)).fadeIn(2000);
						setTimeout(function(){ $($('#banner').find('.slide').get(index+1)).addClass('slide_visible'); }, 2000);
						
					}
					else
					{
						$($('#banner').find('.slide').get(0)).fadeIn(2000);
						$($('#banner').find('.slide').get(0)).addClass('slide_visible');	
						return false;
					}
				}
		});
}

function avanzarBannerPromos()
{
	var size = $('#promociones').find('.slidePorta').size();
		$('#promociones').find('.slidePorta').each(
			function(index,value){
				if($(value).hasClass('slide_visible_Porta'))
				{

					var id_visible = $(value).attr("id");
					//console.log(id_visible);
					$(".paginacionPromo").each( function (){
						$(this).removeClass("paginaVisiblePromo");

					});
					/*$("#" + id_visible + "pagPromo").addClass("paginaVisiblePromo");*/


					

					$(value).fadeOut(1500);
					setTimeout(function(){ $(value).removeClass('slide_visible_Porta'); }, 1500);
					//$(value).removeClass('slide_visible');
					
					if(index+1<size)
					{
						var idPaginaActual = $($('#promociones').find('.slidePorta').get(index+1)).attr("id");
						//console.log(idPaginaActual);
						$("#" + idPaginaActual + "pagPromo").addClass("paginaVisiblePromo");
						$($('#promociones').find('.slidePorta').get(index+1)).fadeIn(2000);
						setTimeout(function(){ $($('#promociones').find('.slidePorta').get(index+1)).addClass('slide_visible_Porta'); }, 2000);
						
					}
					else
					{
						var idPaginaActual = $($('#promociones').find('.slidePorta').get(0)).attr("id");
						$("#" + idPaginaActual + "pagPromo").addClass("paginaVisiblePromo");
						$($('#promociones').find('.slidePorta').get(0)).fadeIn(2000);
						$($('#promociones').find('.slidePorta').get(0)).addClass('slide_visible_Porta');	
						return false;
					}
				}
		});
}

