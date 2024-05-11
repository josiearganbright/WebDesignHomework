var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.moveTo(0,150);
ctx.lineTo(500,150);
ctx.stroke();

ctx.moveTo(150,0);
ctx.lineTo(150,500);
ctx.stroke();

ctx.moveTo(400,150);
ctx.lineTo(400,500);
ctx.stroke();

ctx.moveTo(400,425);
ctx.lineTo(150,425);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 150);
ctx.lineTo(400, 250);
ctx.lineTo(500, 250);
ctx.lineTo(500,150);
ctx.closePath();
ctx.fillStyle = 'blue';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 150);
ctx.lineTo(150, 150);
ctx.lineTo(150, 0);
ctx.lineTo(0,0);
ctx.closePath();
ctx.fillStyle = 'red';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 500);
ctx.lineTo(150, 425);
ctx.lineTo(300, 425);
ctx.lineTo(300,500);
ctx.closePath();
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.stroke();

ctx.moveTo(0,0);
ctx.lineTo(0,500);
ctx.stroke();

ctx.moveTo(0,500);
ctx.lineTo(500,500);
ctx.stroke();

ctx.moveTo(500,500);
ctx.lineTo(500,0);
ctx.stroke();

ctx.moveTo(500,0);
ctx.lineTo(0,0);
ctx.stroke();