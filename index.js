console.log("hello there")
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height-30;

var dx = 1;
var dy = -1;

var ballRadius = 10;



function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2)
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
    drawBall()
    x += dx;
    y += dy;

    //collision detection
    //top and bottom
    if(y + dy > canvas.height-ballRadius || y + dy < 0) {
        dy = -dy;
    }
    //left and right
    if(x + dx > canvas.width-ballRadius || x + dx < 0) {
        dx = -dx;
    }
}
setInterval(draw, 10)


/*
//Red square
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

//Green circle
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

//empty rectangle
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();
*/
