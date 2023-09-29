var boxes = [];

var nboxes = 100000;

var canvas;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight, WEBGL)
}
function setup() {
    
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.position(0, 0)
    canvas.style("z-index", "-1")
    
    for (i = 0; i < nboxes; i++) {
        boxes[i] = new myBox();
    }
    
}

function draw() {
    background(255);
    translate(-windowWidth / 2, -windowHeight / 2)

    // Make the squares cover the entire page
    scale(windowWidth / 1250)

    // Spin the squares
    //rotateZ(frameCount * 0.005)

    // Display the squares
   boxes.forEach((box, index) => {
        push();
        translate((index % 100) * 10,
          Math.floor(index / 100) * 10 , 0);
        box.display();
        pop();
    })
}


function myBox() {
    this.display = function () {
        box(10)
    }
}

function animation(item, index, arr){
    
}
