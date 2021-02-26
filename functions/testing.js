console.log('function js called');

// drawCircle: x, y, r, fillC(rgb string), strokeC(rgb string),
// lineWidth, fill(boolean)
function drawCircle(x,y,r,fillC,strokeC,lineW,fill,stroke){
    ctx.beginPath();
    ctx.arc(x,y,r,0,2*Math.PI);
    if(fill == true){
        ctx.fillStyle = fillC;
        ctx.fill();
    }
    if(stroke == true){
        ctx.lineWidth = lineW;
        ctx.strokeStyle = strokeC;
        ctx.stroke();
    }
} 

// drawLine: x_1 , y_1, x_2, y_2, lw, col(rgb string)
function drawLine(x_1 , y_1, x_2, y_2, lw, col){
    ctx.strokeStyle = col;
    ctx.lineWidth =  lw;
    ctx.beginPath();
    ctx.moveTo(x_1,y_1);
    ctx.lineTo(x_2,y_2);
    ctx.stroke();
}

// drawRectangle: x_1 , y_1, x_2, y_2, lw, fillS(rgb string), strokeS(rgb string)
function drawRectangle(x_1, y_1, x_2, y_2, lw, fillS, strokeS){
    ctx.lineWidth =  lw;
    ctx.fillStyle = fillS;
    ctx.strokeStyle = strokeS;
    ctx.beginPath();
    ctx.rect(x_1, y_1, x_2, y_2);
    ctx.fill();
    ctx.stroke();
}

drawRectangle(0, 0, 50, 50, 0, colArray[3], colArray[4])

ctx.font = "30px Arial";
ctx.fillText ("Hello World", 10, 50);

drawCircle(700,100,60,colArray[0],colArray[0],8,true,true);

drawLine(0, 450, 800, 450, 1.5, colArray[1]);
drawRectangle(0, 520, 100, 20, 0, colArray[1], colArray[1])
drawRectangle(150, 520, 100, 20, 0, colArray[1], colArray[1])
drawRectangle(300, 520, 100, 20, 0, colArray[1], colArray[1])
drawRectangle(450, 520, 100, 20, 0, colArray[1], colArray[1])
drawRectangle(600, 520, 100, 20, 0, colArray[1], colArray[1])
drawRectangle(750, 520, 100, 20, 0, colArray[1], colArray[1])
drawLine(0, 599, 800, 599, 1.5, colArray[1]);

