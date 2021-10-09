function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

img= "";
function preload()
{
   img = loadImage("");
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#dc143c");
    text("book", 45, 75);
    noFill();
    stroke("#dc143c");
    rect(30, 60, 450, 350);
}