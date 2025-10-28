async function getWorld() {
    let response = await fetch("/world", (res));
    let world = await response.json();
    // document.querySelector("body"). innerHTML = `<h1>${world.regions[0].name}</h1>`;
}

getWorld();

function setup() {
    console.log("p5 loaded");
    createCanvas(800, 600);
    colorMode(HSB);
}

function draw() {
    background(frameCount%360, 100, 100);
    rect(100, 100, 50, 50);
}