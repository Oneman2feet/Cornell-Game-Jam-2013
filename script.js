var canvas = document.getElementsByTagName('canvas')[0];
var context = canvas.getContext('2d');

//enviornment vars
var mousePos = {x:0,y:0};
var backpos = 0;

function draw()
{
    var newX = backpos + getDbackpos();
    backpos = ((newX<0) ? 0: ((newX>1600) ? 1600 : newX));
    $("canvas").drawImage({
        source: "resources/testbackground.jpg",
        x: backpos, y: 300
    });
}

function getDbackpos()
{
    var mouseX = mousePos.x;
    mouseX = (mouseX<0) ? 0 : ((mouseX>800) ? 800 : mouseX);
    if (mouseX>=300 && mouseX<=500) return 0;

    var vel;
    if (mouseX<300)
    {
        vel = mouseX - 300;
    }

    if (mouseX>500)
    {
        vel = mouseX - 500;
    }

    return vel/10;

}

function getMousePos(canvas, evt)
{
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

canvas.addEventListener('mousemove', function(evt)
{
    mousePos = getMousePos(canvas, evt);
    console.log(mousePos.x);
}, false);

window.setInterval(draw, 30);
