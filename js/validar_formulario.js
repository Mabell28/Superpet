

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



}