canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

img_width = 500;
img_height = 300;

var img_image;

img_x = 0;
img_y = 0;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image;   
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if ((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)) {
		document.getElementById("d1").innerHTML = "You pressed an alphabet key";
		console.log("alphabet key");
		alphabetkey();
	} else if (keyPressed >=48 && keyPressed<=57) {
		document.getElementById("d1").innerHTML = "You pressed a number key";
		console.log("number key");
		numberkey();
	} else if (keyPressed >=37 && keyPressed<=40) {
		document.getElementById("d1").innerHTML = "You pressed an arrow key";
		console.log("arrow key");
		arrowkey();
	} else if ((keyPressed == 17) || (keyPressed == 18) || (keyPressed == 27)) {
		document.getElementById("d1").innerHTML = "You pressed a special key";
		console.log("special key");
		specialkey();	
	} else {
		document.getElementById("d1").innerHTML = "You pressed some other key";
		console.log("other key");
		otherkey();
	}
}


function alphabetkey() {
	img_image = "Alpkey.png";
	add();
}

function numberkey() {
	img_image = "numkey.png";
	add();
}

function arrowkey() {
	img_image = "Arrkey.png";
	add();
}

function specialkey(){
	img_image = "spkey.png";
	add();	
}

function otherkey(){
	img_image = "otherkey.png";
	add();
}
	
