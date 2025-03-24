const url = "https://github.com/Hopeudoka/wdd231/blob/main/chamber/data/members.json";
const cards = document.querySelector("#cards")


async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let logo = document.createElement("img");
        let address = document.createElement("a");
        let phone = document.createElement("a");
        let website = document.createElement("a");

        logo.innerHTML = `${members.image}`;
        address.innerHTML = `${members.address}`;
        phone.innerHTML = `${members.phone}`;
        website.innerHTML = `${members.website}`;

        logo.setAttribute("src", );
        logo.setAttribute("alt", `An image of ${members.name} company logo`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "50");
        logo.setAttribute("height", "50");

        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    });
}

