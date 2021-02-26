console.log(" drawing js is called ")

ctx.fillStyle = colArray[3];
ctx.strokeStyle = colArray[7];
ctx.lineWidth =  6;
ctx.beginPath();
ctx.rect(75, 80, 300, 200);
ctx.fill();
ctx.stroke();

ctx.fillStyle = colArray[8];
ctx.strokeStyle = colArray[6];
ctx.lineWidth =  10;
ctx.beginPath();
ctx.arc(400, 300, 45, 0, 2*Math.PI);
ctx.fill();
ctx.stroke();

ctx.strokeStyle = colArray[2];
ctx.lineWidth =  0.5;
ctx.beginPath();
ctx.moveTo(400,10);
ctx.lineTo(400,500);
ctx.stroke();