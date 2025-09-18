console.log("This is print")

let demoBoxes = document.getElementsByClassName("demo-box");
console.log(demoBoxes.length);

function clickedonBoxDemo() {
    clickCount++;// clickCount = clickCOunt + 1;
    let topAreaDiv = document.getElementById("top-area")
    topAreaDiv.innerText = clickCount;
}