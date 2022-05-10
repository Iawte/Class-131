var img = ""
var status= ""

function preload() {
    img = loadImage("dog_cat.jpg")
}

function setup() {
    canvas = createCanvas(700, 450)
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status:detecting Objects";
}

function draw() {
    image(img, 0, 0, 700, 450)
    fill("red")
    text("Dog", 80, 100)
    noFill()
    stroke("red")
    rect(70, 50, 500, 350)
    fill("red")
    text("cat", 320, 120)
    noFill()
    stroke("red")
    rect(300, 100, 400, 300)
}


function modelLoaded() {
    console.log("Model Loaded")
    objectDetector.detect(img, gotResults);
    status=true;
}


function gotResults(error, results) {
    if (error) {
        console.log(error)
    }
    else {
        console.log(results)
    }
}