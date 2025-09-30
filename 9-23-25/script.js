class Person {
    constructor(n) {
        this.name = n;
    }

    sayHello(howManyTimes) {
        for (let i = 0; i < howManyTimes; i++) {
            console.log("Hello, my name is " + this.name);
        }
    }
}

// Instantiating an object from a class
let mike = new Person("Mike");
mike.sayHello(119);

let stringVersionOfMike = JSON.stringify(mike);
console.log(stringVersionOfMike);

let mikeObject = JSON.parse(stringVersionOfMike);
console.log(mikeObject.name);

console.log(localStorage.getItem("user - or whatever"));
localStorage.setItem("user - or whatever", "mike!" + Math.random());


// function buttonClicked(e) {
//     console.log("BUTTON CLICKED");
//     console.log(this);
// }

let myButton = document.querySelector("#myButton");
// myButton.addEventListener("click", buttonClicked);

const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext('2d');


myButton.addEventListener("click", (e) => {
    console.log("BUTTON CLICKED");
    console.log(this);

    

    // Draw a filled rectangle
    ctx.fillStyle = "#fa25f8";
    let x = Math.random() * 600;
    let y = Math.random() * 400;
    ctx.fillRect(x, y, 10, 75);
});

let x = 0;
let y = 200;

function animationFunction() {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, 600, 400);

    ctx.fillStyle = "#fa25f8";
    // let x = Math.random() * 600;
    // let y = Math.random() * 400;
    x += 1;
    ctx.fillRect(x, y, 10, 75);
}

setInterval(animationFunction, 1000/60);

















