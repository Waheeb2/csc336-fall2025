const fs = require("fs");  // CommonJS module loading

let programCount  = 0;

try {
    let fileContents = fs.readFileSync("program_count.txt");
} catch(error) {
    console.log("Error happened! Probably because the file doesn't exist")
    fs.writeFileSync("program_count.txt", JSON.stringify(programCount));
}

fileContents