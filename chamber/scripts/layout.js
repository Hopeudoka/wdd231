const gridbutton = document.querySelector("#gridIcon");
const listbutton = document.querySelector("#listIcon");
const display = document.querySelector("article");


gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}