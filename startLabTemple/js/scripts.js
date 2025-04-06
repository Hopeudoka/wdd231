import { temples } from "../data/temples.js";
// console.log(temples);

import { url } from "../data/temples.js";
// console.log(url);

const showhere = document.querySelector("#showHere");
const mydialog = document.querySelector("#mydialog");
const dialogPara = document.querySelector("#mydialog p");

const templeTitle = document.querySelector("#mydialog h2");
const closeButton = document.querySelector("#mydialog button");

closeButton.addEventListener("click", () => { mydialog.close(); });

function displayItems(data) {
    console.log(data);
    data.forEach(x => {
        console.log(x);
        const photo = document.createElement("img");
        photo.src = `${url}${x.path}`;
        photo.alt = x.name

        photo.addEventListener("click", () => showStuff(x));
        showhere.appendChild(photo);
    });
}

function showStuff(x) {
    templeTitle.innerHTML = x.name;
    dialogPara.innerHTML = `Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}`;
    mydialog.showModal()
}

displayItems(temples);