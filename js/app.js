var cargarPagina = function (){
	cargarPersonajes();
};

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

var mostrarTotalPersonajes = function(){
	$("#total").text(total);
}

var mostrarPersonajes = function(personajes){
	var $ul = $("#personajes");
			personajes.forEach(function (personaje) { //por defecto nos va a dar una unidad, obtiene el valor de cada objeto
				var $li = $("<li />");    //crea un elemento li
				$li.text(personaje.name + " - " + personaje.height);   //crea un elemento li para cada nombre de personaje
				$ul.append($li);   //agrega cada personaje a la lista
				//console.log(personaje.name);  //obtenemos sólo el nombre de los personajes
			});
		};

$(document).ready(cargarPagina); //es mejor colocarlo después de haber declarado la función cargarPagina p/hoisting


//si usamos un JSON que está en la web no es necesario que levantemos un servidor, si consumimos uno que nosotros creamos sí es necesario levantarlo
//si usamos un framework de css es mejor que utilicemos una plantilla para cambiar valores
