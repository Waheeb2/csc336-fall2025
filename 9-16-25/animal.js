let animals = [
    {
        type: "cat",
        strength: 10,
        chrisma: 16
    },
    {
        type: "dog",
        strength: 14,
        chrisma: 16
    },
    {
        type: "rabbit",
        strength: 7,
        chrisma: 12
    },
    {
        type: "sea horse",
        strength: 2,
        chrisma: 20
    },
];


document.addEventListener("DOMContentLoaded", populateAnimalDiv)

function populateAnimalDiv() {
    let animalInfoDiv = document.querySelector("#all-animal-info");
    //for (let i = 0; i < animals.length; i++) {
    //let animal = animals[i];
    for (let animal of animals) {
        let animalHTML = createAnimalDiv(animal);
        animalInfoDiv.innerHTML += animalHTML;
    }

}

function createAnimalDiv(animal) {
    return `
        <div>
            <h1>${animal.type}</h1>
            <div class='stats'>
            <div class= 'stats'>strength: ${animal.strength}</div>
            <div class= 'stats'>chrisma: ${animal.chrisma}</div>
        </div>
    `;
}

let addAnimalForm = document.querySelector("add-animal-form");
addAnimalForm.addEventListener("submit", addNewAnimal);

function addNewAnimal() {  
    let typeInput = document.querySelector("#animal-type-field").value;
    let strengtheInput = document.querySelector("#animal-strength-field").value;
    let chrismaInput = document.querySelector("#animal-chrisma-field").value;
    let addNewAnimal = {
        type: typeInput,
        strength: strengtheInput,
        chrisma: chrismaInput
    }

    console.log("added new animal");
}