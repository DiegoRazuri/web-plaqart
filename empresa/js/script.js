$(document).ready(function(){


var t=setInterval(function(){avanzar2();},6500);

	$('.btnAtras').click(function()
	{
		var size = $('#banner').find('.slide').size();
		$('#banner').find('.slide').each(
			function(index,value){
				if($(value).hasClass('slide_visible'))
				{
					$(value).fadeOut(2000);
					$(value).removeClass('slide_visible');
					
					if(index==0)
					{
						$($('#banner').find('.slide').get(size-1)).fadeIn(2000);
						$($('#banner').find('.slide').get(size-1)).addClass('slide_visible');
						return false;
					}
					else
					{
						$($('#banner').find('.slide').get(index-1)).fadeIn(2000);
						$($('#banner').find('.slide').get(index-1)).addClass('slide_visible');	
						return false;
					}
				}
		});
	});
	$('.btnAvanzar').click(function()
	{
		var size = $('#banner').find('.slide').size();
		$('#banner').find('.slide').each(
			function(index,value){
				if($(value).hasClass('slide_visible'))
				{
					$(value).fadeOut(2000);
					$(value).removeClass('slide_visible');
					
					if(index+1<size)
					{
						$($('#banner').find('.slide').get(index+1)).fadeIn(2000);
						$($('#banner').find('.slide').get(index+1)).addClass('slide_visible');
						return false;
					}
					else
					{
						$($('#banner').find('.slide').get(0)).fadeIn(2000);
						$($('#banner').find('.slide').get(0)).addClass('slide_visible');	
						return false;
					}
				}
		});
	});
	
	
	
});


/*function avanzar()
{
	var size = $('#banner').find('.slide').size();
		$('#banner').find('.slide').each(
			function(index,value){
				if($(value).hasClass('slide_visible'))
				{
					$(value).fadeOut(2000);
					setTimeout(function(){ $(value).removeClass('slide_visible'); }, 2000);
					//$(value).removeClass('slide_visible');
					
					if(index+1<size)
					{
						$($('#banner').find('.slide').get(index+1)).fadeIn(2000);
						$($('#banner').find('.slide').get(index+1)).addClass('slide_visible');
						return false;
					}
					else
					{
						$($('#banner').find('.slide').get(0)).fadeIn(2000);
						$($('#banner').find('.slide').get(0)).addClass('slide_visible');	
						return false;
					}
				}
		});
}*/

function avanzar2()
{
	var size = $('#banner').find('.slide').size();
		$('#banner').find('.slide').each(
			function(index,value){
				if($(value).hasClass('slide_visible'))
				{
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