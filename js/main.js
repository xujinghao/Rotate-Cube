var box = document.querySelector(".main");
var x = 0,
	y = 0;
window.onkeydown = function(event) {
	switch(event.keyCode) {
		case 37:
			y -= 10;
			break;
		case 38:
			x += 10;
			break;
		case 39:
			y += 10;
			break;
		case 40:
			x -= 10;
			break;
		default:
			break;
	}
	box.style.transform = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
}
var zuo = setInterval(function() {
	y += 10;
	box.style.transform = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
}, 100);