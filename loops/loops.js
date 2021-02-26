console.log('loops js called');

// drawCircle x, y, r, fillC(rgb string), strokeC(rgb string),
// lineWidth, fill(boolean )
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

for(var k=0 ;k<10 ; k++){
    console.log(k);
    drawCircle(500,10+k*30,10,colArray[5],colArray[6],1,true,true);
}

for(var i=0 ;i<10 ; i++){
    console.log(i);
    drawCircle(40+40*i,400,10,colArray[5],colArray[6],1,true,true);
}

for(var i=0 ;i<8 ; i++){
    for(var j=0; j<5; j++){
        drawCircle(10+30*i, 10+j*30, 10,colArray[5],colArray[6],1,true,true);
    }
}