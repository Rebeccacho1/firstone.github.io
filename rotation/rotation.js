console.log('loops js called');

// drawRectangle: x, y, w, h, fillC(rgb string), strokeC(rgb string),
// lineWidth, fill(boolean)
function drawRectangle(x, y, w, h, fillC, strokeC, lw, fill, stroke){
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    if(fill == true){
        ctx.fillStyle = fillC;
        ctx.fill();
    }
    if(stroke == true){
        ctx.lineWidth = lw;
        ctx.strokeStyle = strokeC;
        ctx.stroke();
    }
}


// drawCircle x, y, r, fillC(rgb string), strokeC(rgb string),
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

ctx.save();
ctx.translate(300,200);
ctx.rotate(30*Math.PI/180);
drawCircle(0,0,20,"",colArray[4],2,false,true);
drawRectangle(0, 0, 100, 200, colArray[5], colArray[4], 5, true, true);
ctx.restore();

ctx.save();
ctx.translate(500,200);
for(var i=0; i<360; i+=15){
    ctx.rotate(15*Math.PI/180);
    drawRectangle(0, 0, 100, 50, colArray[5], colArray[4], 1 , true, true);
}
ctx.restore();