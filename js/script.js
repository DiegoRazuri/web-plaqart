$(document).ready(function(){


var t=setInterval(function(){avanzar2();},7500);
var t=setInterval(function(){avanzarBannerPromos();},6500);

	$('.btnAtras').click(function()
	{
		var size = $('#promociones').find('.slidePorta').size();
		$('#promociones').find('.slidePorta').each(
			function(index,value){
				if($(value).hasClass('slide_visible_Porta'))
				{
					$(value).fadeOut(2000);
					$(value).removeClass('slide_visible_Porta');
					
					if(index==0)
					{
						$($('#promociones').find('.slidePorta').get(size-1)).fadeIn(2000);
						$($('#promociones').find('.slidePorta').get(size-1)).addClass('slide_visible_Porta');
						return false;
					}
					else
					{
						$($('#promociones').find('.slidePorta').get(index-1)).fadeIn(2000);
						$($('#promociones').find('.slidePorta').get(index-1)).addClass('slide_visible_Porta');	
						return false;
					}
				}
		});
	});
	$('.btnAvanzar').click(function()
	{
		var size = $('#promociones').find('.slidePorta').size();
		$('#promociones').find('.slidePorta').each(
			function(index,value){
				if($(value).hasClass('slide_visible_Porta'))
				{
					$(value).fadeOut(2000);
					$(value).removeClass('slide_visible_Porta');
					
					if(index+1<size)
					{
						$($('#promociones').find('.slidePorta').get(index+1)).fadeIn(2000);
						$($('#promociones').find('.slidePorta').get(index+1)).addClass('slide_visible_Porta');
						return false;
					}
					else
					{
						$($('#promociones').find('.slidePorta').get(0)).fadeIn(2000);
						$($('#promociones').find('.slidePorta').get(0)).addClass('slide_visible_Porta');	
						return false;
					}
				}
		});
	});


});



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
					$(value).fadeOut(2000);
					setTimeout(function(){ $(value).removeClass('slide_visible_Porta'); }, 2000);
					//$(value).removeClass('slide_visible');
					
					if(index+1<size)
					{
						$($('#promociones').find('.slidePorta').get(index+1)).fadeIn(2000);
						setTimeout(function(){ $($('#promociones').find('.slidePorta').get(index+1)).addClass('slide_visible_Porta'); }, 2000);
						
					}
					else
					{
						$($('#promociones').find('.slidePorta').get(0)).fadeIn(2000);
						$($('#promociones').find('.slidePorta').get(0)).addClass('slide_visible_Porta');	
						return false;
					}
				}
		});
}

