const body = document.querySelector("#myBody");
const myButton = document.querySelector("#myButton");

const myFunction = () => {
    body.classList.toggle("light-mode")
    if (myButton.textContent === "Light Mode") {
        myButton.textContent = "Dark Mode"
    } else if (myButton.textContent === "Dark Mode") {
        myButton.textContent = "Light Mode"
    }
}

myButton.addEventListener("click", myFunction)