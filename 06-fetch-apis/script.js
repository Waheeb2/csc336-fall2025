let adviceButton = document.querySelector("#adviceButton");
let activityButton = document.querySelector("#activityButton");
let adviceText = document.querySelector("#adviceText");
let activityText = document.querySelector("#activityText");

adviceButton.addEventListener("click", e => getAndDisplayAdvice());
activityButton.addEventListener("click", e => getAndDisplayActivity());


let timeBeforeRequest;

// Random advice 
async function getAndDisplayAdvice() {
    timeBeforeRequest = Date.now();

    let adviceResponse = await fetch("https://api.adviceslip.com/advice");
    let adviceData = await adviceResponse.json();

    let timePassed = Date.now() - timeBeforeRequest;
    console.log(`It took ${timePassed} ms for the advice request.`);
    console.log(adviceData);

    adviceText.textContent = `"${adviceData.slip.advice}"`;
}

// Random activity 
async function getAndDisplayActivity() {
    timeBeforeRequest = Date.now();

    let activityResponse = await fetch("https://bored-api.appbrewery.com/random");
    let activityData = await activityResponse.json();

    let timePassed = Date.now() - timeBeforeRequest;
    console.log(`It took ${timePassed} ms for the activity request.`);
    console.log(activityData);

    activityText.textContent = `"${activityData.activity}"`;
}
