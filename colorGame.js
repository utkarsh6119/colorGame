var numSquares=6;
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickcol=pickColor();
var displayColor=document.getElementById("disCol");
var messageDispaly=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
var modeButtons=document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click",function()
	{
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent==="Easy")
		{
			numSquares=3;
		}
		else{
			numSquares=6;
		}
		reset();
	});
}

function reset()
{
	colors=generateRandomColors(numSquares);
	pickcol=pickColor();
	displayColor.textContent=pickcol;
	messageDispaly.textContent="";
	resetButton.textContent="New Colors";

	for (var i = 0; i < squares.length; i++) 
	{
		if(colors[i])
		{
			squares[i].style.display="block";
			squares[i].style.background=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
	h1.style.background="steelblue";
}


resetButton.addEventListener("click",function()
{
		reset();
});

displayColor.textContent=pickcol;

for (var i = 0; i < squares.length; i++)
{
	
	squares[i].style.background=colors[i];
	//grab color of clicked square
	squares[i].addEventListener("click",function()
	{
		var clickCol=this.style.background;
		
		if(clickCol === pickcol)
		{
			messageDispaly.textContent="Correct";
			changeColor(clickCol);
			resetButton.textContent="Play Again?";
			h1.style.background=pickcol;
		}
		else{
			
			 this.style.background="#232323";
			 messageDispaly.textContent="Try Again";
		}
	});	
}

function changeColor(color)
{
	for (var i = 0; i < squares.length; i++) 
	{
		squares[i].style.background=color;
	}
}

function pickColor()
{
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var arr=[];
	for (var i = 0; i < num; i++) 
	{
		arr.push(randomColor());
	}
	return arr;
}

function randomColor()
{
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r+", "+g+", "+b+")";
}