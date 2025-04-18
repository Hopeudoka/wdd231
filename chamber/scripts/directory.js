const url = "https://raw.githubusercontent.com/Hopeudoka/wdd231/main/chamber/data/members.json";
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
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        let name = document.createElement("h2");

        address.innerHTML = `${member.address}`;
        phone.innerHTML = `${member.phone}`;
        name.innerHTML = `${member.name}`;

        logo.setAttribute("src", member.image);
        logo.setAttribute("alt", `An image of ${member.name} company logo`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "50");
        logo.setAttribute("height", "50");

        website.textContent = member.website;
        website.setAttribute("href", member.website);
        website.setAttribute("target", "_blank");

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    });

    cards.classList.add("grid");
}

getMemberData();