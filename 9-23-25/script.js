
class Person {
    constructor() {
        this.name = n;
    }
    
    sayHello(howManyTimes) {
        for (let i = 0; i < howManyTimes; i++)
            console.log("Hello, my name is " + this.name);
    }
}

// Instantiating an object from a class
let waheeb = new Person("Waheeb");
waheeb.sayHello(119);


//let stringVersionOfWaheeb = JSON.stringify(waheeb);

console.log(localStorage.getItem("user"));
localStorage.setItem("user - or whatever", "waheeb!" + Math.random());


// function buttonClicked(e) {
//    console.log("BUTTON CLICKED")
//    console.log(e);
// }

//crtl /

let myButton = document.querySelector("#myButton");
myButton.addEventListener("click", buttonClicked);

myButton.addEventListener("click", (e) => {
    console.log("BUTTON CLICKED");
    console.log(this);
});






const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext('2d');

//dra a filled rectangle
ctx.fillStlye = "#fa25f8";
let x = Math.random() * 600;
let y = Math.random() * 400;
ctx.fillRect(50,50,10,75);




setInterval(animationFucntion, 1000);
