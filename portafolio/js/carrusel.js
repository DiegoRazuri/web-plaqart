$(document).ready(function (){

	var set = function(marco){
		console.log("esta corriendo set")

		$marco = marco;

		$container = $marco.children();

		if($container){
			$items = $container.children();
			cantidad = $items.length;
			incremento = $items.outerWidth(true);
			itemsVisibles = Math.floor($marco.width() / incremento);
			primerItem = 1;
			estado = false;
			anchoContenedor = (cantidad + itemsVisibles)* incremento;
		};

		$container.css('width', anchoContenedor);
		//$items.css("width", anchoContenedor/(cantidad + itemsVisibles));
		for(var i=0; i < itemsVisibles; i++){
			$container.append($items.eq(i).clone());
		};
	};

	var carrusel = function (marco, next, prev){
		console.log("el script esta corriendo");

		set(marco);


		//PROGRAMACION DE NAVEGACION DE PORTAFOLIO

		$(next).click(function(e){
			e.preventDefault();

			if(!estado) {

				if(primerItem > cantidad){
					primerItem = 2;
					$container.css('left', '0px');
				}else{
					primerItem++;
				}

				estado = true;
				$container.animate({
					left: '-=' + incremento
				}, 'swing', function(){
					estado = false;
				});
			}

		});
		
		$(prev).click(function(e){
			e.preventDefault();

			if(!estado) {

				if(primerItem == 1){
					$container.css('left', cantidad * incremento* -1);
					primerItem = cantidad;
				}else{
					primerItem--;
				}

				estado = true;
				$container.animate({
					left: '+=' + incremento
				}, 'swing', function(){
					estado = false;
				});
			}
		});
	};

	//EJECUTAMOS EL CARRUSEL POR DEFECTO

	carrusel($("#marco"), $("#next"), $("#prev"));
	
	//SETEAMOS LAS CANTIDADES DE ITEMS DEL CARRUSEL PARA CADA BOTON 

	$("#btnDiseno").click(function(){
		var $items = $("#vitrina").children();
		cantidad = $items.length;
		var anchoContenedor = (cantidad + itemsVisibles)* incremento;

		$("#vitrina").css('width', anchoContenedor);
		for(var i=0; i < itemsVisibles; i++){
			$container.append($items.eq(i).clone());
		};

	});

	$("#btnWeb").click(function(){
		var $items = $("#vitrina").children();
		cantidad = $items.length;
		var anchoContenedor = (cantidad + itemsVisibles)* incremento;

		$("#vitrina").css('width', anchoContenedor);
		for(var i=0; i < itemsVisibles; i++){
			$container.append($items.eq(i).clone());
		};

	});

	$("#btnImp").click(function(){
		var $items = $("#vitrina").children();
		cantidad = $items.length;
		var anchoContenedor = (cantidad + itemsVisibles)* incremento;

		$("#vitrina").css('width', anchoContenedor);
		for(var i=0; i < itemsVisibles; i++){
			$container.append($items.eq(i).clone());
		};

	});

	$("#btnMerch").click(function(){
		var $items = $("#vitrina").children();
		cantidad = $items.length;
		var anchoContenedor = (cantidad + itemsVisibles)* incremento;

		$("#vitrina").css('width', anchoContenedor);
		for(var i=0; i < itemsVisibles; i++){
			$container.append($items.eq(i).clone());
		};

	});
	
});