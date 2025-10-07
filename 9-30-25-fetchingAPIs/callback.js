let button = document.querySelector("#callbackDemoButton");

// function clickEventHappened(e) {
//    console.log("Clicked!");
// }

// button.addEventListener("click", clickEventHappened);

// button.addEventListener("click", (e) => { console.log("Clicked!") });

button.addEventListener("click", e => console.log("Clicked!"));




// let dogRequest = fetch("https://dog.ceo/api/breeds/image/random");
// let beforeRequest = Date.now();

// dogRequest
//        .then( (response) => { return response.json() })
//        .then( (dogData) => { 
//            let timePassed = Date.now () - beforeRequest;
//            console.log(`It took ${timePassed} for the request.`);
//            let dogImageHTML = document.createElement("img");
//            dogImageHTML.scr = dogData.message;
//            document.querySelector("#dogDiv").appendChild(dogImageHTML);
//      })
//      .catch( () => console.log("Something went wrong"))


// console.log("Will this appear before the json?")




async function getAndDisplayDogImage() {
    let dogResponse = await fetch("https://dog.ceo/api/breeds/image/random");
    let dogData = await dogResponse.json();


    let timePassed = Date.now () - beforeRequest;
    console.log(`It took ${timePassed} for the request.`);
    let dogImageHTML = document.createElement("img");
    dogImageHTML.scr = dogData.message;
    document.querySelector("#dogDiv").appendChild(dogImageHTML);



}

getAndDisplatDogImage();



































// function doSomething(numTimes) {
//     let sum = 0;
//     for(let i = 0; i < numTimes; i++) {
//         sum += i * numTimes / 4;
//     }
// }

// let result = doSomething(100);
// console.log(result)

