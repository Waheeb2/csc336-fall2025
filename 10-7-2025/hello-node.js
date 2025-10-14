const fs = require("fs");  // Import library using "CommonJS"

console.log("Hello Node!")

let randomNumbers = [];

// read "randomNumbers.txt"
let fileContents = fs.readFileSync("./randomNUmbers.txt", "utf8") //  ./ = in my current location
console.log(fileContents[0]);

randomNumbers = JSON.parse(fileContents);

console.log(randomNumbers[0]);


for (i = 0; i< 10; i++ ) {
    let rand = Math.random();
    randomNumbers[i] = rand;
    //console.log(randomNumbers[i]);
}

// let str = "";
// for (let rand of randomNumbers) {
//     str += rand + "\n";
// }
// fs.writeFileSync("randomNumbers.txt", JSON.stringify(randomNumbers));


fs.writeFileSync("randomNumbers.txt", JSON.stringify(randomNumbers));