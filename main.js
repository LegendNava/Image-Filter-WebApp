function preLoad() {}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(50, 270);
    video = createCapture(VIDEO);
    video.hide();
    tintColour = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tintColour);
}

function applyFilter() {
    tintColour = document.getElementById("fitercolour").value;
}

function take_snapshot() {
    save('filteredpicture.png');
}