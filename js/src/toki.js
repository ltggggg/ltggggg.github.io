// JavaScript Document
function c(){
	var time = new Date();
	var t = time.toLocaleString();
	document.getElementById("asd").innerHTML = t;
	setTimeout(c,1000);
}
window.onload(c());