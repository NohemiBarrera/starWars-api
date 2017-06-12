var cargarPagina = function (){
	cargarPersonajes();
	$(document).on("click", ".personaje", mostrarDetallePersonaje); //.on asigna el evento a todos los elementos seleccionados, en este caso todos los que tengan la clase personaje
};

var cargarPersonajes = function(){
	var url = 'http://swapi.co/api/people/';
	$.getJSON(url, function(response){
		var personajes =response.results;
		var total = response.count;
		mostrarTotalPersonajes(total);
		mostrarPersonajes(personajes);
	});
	
};

var mostrarTotalPersonajes = function(total){
	$("#total").text(total);
}

var mostrarPersonajes = function(personajes){
	var $ul = $("#personajes");
			personajes.forEach(function (personaje) { //por defecto nos va a dar una unidad, obtiene el valor de cada objeto
				var $li = $("<li />");    //crea un elemento li
				$li.addClass("personaje");
				$li.attr("data-url", personaje.homeworld);   //le da el atributo de dat-url a cada personaje
				$li.text(personaje.name + " - " + personaje.height + " cm");   //crea un elemento li para cada nombre de personaje
				$ul.append($li);   //agrega cada personaje a la lista
				//console.log(personaje.name);  //obtenemos sólo el nombre de los personajes
			});
		};

		var plantillaPlaneta = '<h2>Planeta</h2>' +
		'<p><strong>Nombre: </strong> **nombre**</p>' +
		'<p><strong>Clima: </strong> **clima**</p>';

		var mostrarDetallePersonaje = function (){
			var url = $(this).data("url");
			var $planetaContenedor= $("#planeta");
			$.getJSON(url, function (response){
				$planetaContenedor.html(
				plantillaPlaneta.replace('**nombre**', response.name).replace('**clima**', response.climate)
				);
			});
		};

$(document).ready(cargarPagina); //es mejor colocarlo después de haber declarado la función cargarPagina p/hoisting


//si usamos un JSON que está en la web no es necesario que levantemos un servidor, si consumimos uno que nosotros creamos sí es necesario levantarlo
//si usamos un framework de css es mejor que utilicemos una plantilla para cambiar valores
/*$.ajax
var cargarPersonajes = function(){
$.ajax('http://swapi.co/api/people/', {  //usamos el url como parámetro y obtenemos el mismo resultado que si lo pusieramos como propiedad, esto debido al método jQuery.ajax(url[,settings])
		method: 'GET',
		dataType: 'json',  //indica el tipo de información que vamos a recibir
		success: function(response){		//es un método
			var personajes = response.results; //así obtenemos 
			var total = response.count;

			mostrarTotalPersonajes(total);
			mostrarPersonajes(personajes);
		},
		error: function(error){
			console.log("error", error);
		}
	});
	};
	*/