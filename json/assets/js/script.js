// Leer base de datos JSON desde archivo datos.json

var data;
 
$(document).ready(function() {
	$.ajax({
		url: "datos.json",
		data: "nocache=" + Math.random(),
		type: "GET",
		dataType: "json",
		success: function(source){
			data = source;
			mostrarJSON();
		},
		error: function(data){
			alert("ERROR");
		}
	});							
});

// Mostrar resultados en div #data

function mostrarJSON(){
	$.each(data.videos, function(index, value) {
		$("#data").append('<p>' + data.videos[index].Titulo  + ' - ' + data.videos[index].Tiempo + ' - ' + data.videos[index].Final  + '</p>');
	});
 
}
