//Examplle guestbook entries
let entries = [
    {
        name: "Alice",
        color: "#ff0000",
        message: "Excited to be here!"
    },
    {
        name: "Bob",
        color: "#0000ff",
        message: "Looking forward to meeting people here, thanks for having me!."
    }
];

//Render all entries
function populateEntriesDiv() {
    let entriesDiv = document.querySelector("#all-entries");
    entriesDiv.innerHTML = "";

    for (let entry of entries) {
        let entryHTML = createEntryDiv(entry);
        entriesDiv.innerHTML += entryHTML;
    }
}

//Create HTML for one entry
function createEntryDiv(entry) {
    return `
        <div class="entry">
            <h2 style="color:${entry.color}">${entry.name}</h2>
            <p>${entry.message}</p>
        </div>
    `;
}

//Handle form submission
let addEntryForm = document.querySelector("#add-entry-form");
addEntryForm.addEventListener("submit", addNewEntry);

//Draw initial entries
populateEntriesDiv();

function addNewEntry(e) {
    e.preventDefault();

    let nameInput = document.querySelector("#guest-name-field").value.trim();
    let colorInput = document.querySelector("#guest-color-field").value;
    let messageInput = document.querySelector("#guest-message-field").value.trim();

    let errorMessage = document.querySelector("#error-message");
    errorMessage.textContent = "";

    //Validation rules
    if (nameInput.length < 3) {
        errorMessage.textContent = "Name must be at least 3 characters long.";
        return;
    }
    if (messageInput.length === 0) {
        errorMessage.textContent = "Message cannot be empty.";
        return;
    }

    let newEntry = {
        name: nameInput,
        color: colorInput,
        message: messageInput
    };

    entries.push(newEntry);
    populateEntriesDiv();

    //Clear form fields
    addEntryForm.reset();
}
