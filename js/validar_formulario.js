/*

function valida () {
	var nombre =  document.getElementById('nombre').value;
var apellido =  document.getElementById('apellido').value;
var mail =  document.getElementById('mail').value;

if(nombre==0) {
	
	alert("Ingrese se nombre");
	document.getElementById('nombre').focus();
	return false;
};

if(apellido==0) {
	
	alert("Ingrese se apellido");
	document.getElementById('apellido').focus();
	return false;
};



}*/


var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$(document).ready(function(){
	$('#enviar').click(function(){

		var nombre = $('#nombre').val();
		var apellido = $('#apellido').val();
		var mail = $('#mail').val();

		if (nombre == ""){
			$('#mensaje1').fadeIn();
			return false;
		}else{
			$('#mensaje1').fadeOut();
			if(apellido == ""){  
				$('#mensaje2').fadeIn();
				return false;
			}
		}
	});
});