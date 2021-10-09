function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

img= "";
function preload()
{
   img = loadImage("https://tse4.mm.bing.net/th?id=OIP.NzOK9l8QDQ10hYv7OEybiwHaE8&pid=Api&P=0&w=256&h=172");
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#dc143c");
    text("pizza", 45, 75);
    noFill();
    stroke("#dc143c");
    rect(30, 60, 450, 350);
}