var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var newColor = document.querySelector("#newColor");
var mode = document.querySelectorAll(".mode");

var num = 6;
var colors= [];
var pickedColor;

init();


function init(){	
	setupModButtons();
	setupSquares();
	reset();
}

function setupModButtons(){
	for(var i=0; i<mode.length; i++){
		mode[i].addEventListener("click", function(){
			mode[0].classList.remove("chosen");
			mode[1].classList.remove("chosen");
			this.classList.add("chosen");
			num = this.textContent === "Easy" ? 3 : 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){

		squares[i].addEventListener("click", function(){
			if(this.style.backgroundColor === pickedColor){
				changeColors(pickedColor);
				h1.style.backgroundColor = pickedColor;
				messageDisplay.textContent = "Correct!";
				newColor.textContent = "Play Again";
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});

	}

	newColor.addEventListener("click", function(){
		reset();
	});
}

function changeColors(color) {
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors (){
	var arr = [];
	for(var i=0; i < num; i++){
		arr[i] = randomColor();
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(){
	//reset
	colors = generateRandomColors();
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];	
		}else{
			squares[i].style.display = "none";
		}
	}

	newColor.textContent = "New Color";
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
}

