const year = document.querySelector("#currentyear");
const lastMod = document.querySelector("#lastModified");
const date = new Date();

year.innerHTML = date.getFullYear();

lastMod.innerHTML = `Last Update: ${document.lastModified}`;