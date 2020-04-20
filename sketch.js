var P1 = {x: 0, y: 0};
var P2 = {x: 0, y: 0};
var P3 = {x: 0, y: 0};
var P4 = {x: 0, y: 0};
var P5 = {x: 0, y: 0};
var P6 = {x: 0, y: 0};
var P7 = {x: 0, y: 0};
var P8 = {x: 0, y: 0};

function setup() 
{
    createCanvas(windowWidth, windowHeight)
    P2.x=windowWidth;
    P2.y=windowHeight;

    P3.y=windowHeight;
    P4.x=windowWidth;    
    P5.x=Math.floor(windowWidth / 2);
    
    P6.y=windowHeight;
    P6.x=Math.floor(windowWidth / 2);
    P7.y=Math.floor(windowHeight / 2);
    
    P8.x=windowWidth;
    P8.y=Math.floor(windowHeight / 2);
}

function draw()
{
    linea(P1, P2);
    linea(P3, P4);
    linea(P5, P6);
    linea(P7, P8); 
}


function linea(p1, p2){

    let lim
    let x1
    let y1
    let x
    let y

    const dx = round(p2.x - p1.x)
    const dy = round(p2.y - p1.y)
    if(round(dx) > round(dy)){
        lim = round(dx)
    }else{
        lim = round(dy)
    }

    x1 = dx/lim
    y1 = dy/lim
    x = p1.x
    y = p1.y

    let i = 0

    while(i < lim){
        point(x,y)
        x += x1
        y += y1 

        i++
    }

}







function lineaPP(p1, p2)
{
    /*
    var py = p2.y - p1.y;
    var px = p2.x - p1.x;
    var m = py / px;
    var b = p1.y - m * p1.x;

    point(p1.x, p1.y);
    let x = p1.x;
    let y;

    while(x != p2.x)
    {
        y = m * x + b;
        point(x, y);
        x++;
    }
    if(p1.x == p2.x)
    {
        y = p1.y;
        while(y != p2.y){
            point(x, y)
            y++;
        }
    }   
    */



}