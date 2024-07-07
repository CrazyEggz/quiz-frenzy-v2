const nameEl = document.querySelector("#name-input-container > input");
const nameInputButton = document.getElementById("name-input-button");
nameInputButton.addEventListener("click", checkNameInput);
nameEl.addEventListener("keydown", onNameKeyDown);

function checkNameInput() {
    const speechBubbleElement = document.getElementById("welcome-speech-bubble");
    const nameInputContainer = document.getElementById("name-input-container");
    const nameInputValue = nameEl.value;
    if (nameInputValue === "") {
        nameInputContainer.classList.add("shake");
        speechBubbleElement.innerText = "That's not a valid name!\n You aren't a nobody... are you?";
    }
    setTimeout(() => nameInputContainer.classList.remove("shake"), 500);
}

function onNameKeyDown(event) {
    if (event.key === "Enter") {
        checkNameInput();
    }
}