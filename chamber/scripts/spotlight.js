// const url = "https://raw.githubusercontent.com/Hopeudoka/wdd231/main/chamber/data/members.json";

async function fetchJson() {
    try {
        let response = await fetch("data/members.json");
        let data = await response.json();
        const members = data.members;

        const eligibleMembers = members.filter(member =>
            member.membership_level === "3 (Gold)"  || member.membership_level
            === "2 (Silver)"
        );
        
        const randomCount = Math.random() > 0.5 ? 2 : 3;
        const shuffled = [...eligibleMembers].sort(() => 0.5 - Math.random());
        const spotlightMembers = shuffled.slice(0, randomCount);

        displaySpotlights(spotlightMembers);
    } catch (error) {
        console.error(error);
    }
    
    function displaySpotlights(members) {
        const spotlightContainer = document.querySelector(".spotlight");
        spotlightContainer.innerHTML = "";

        members.forEach(member => {
            const card = document.createElement("div");
            card.className = "spotlight-card";
            const badgeClass = member.membership_level.includes("Gold") ? "gold" : "silver";
        
            card.innerHTML = `
                <div class="membership-badge ${badgeClass}">${member.membership_level.split(" ")[1]}</div>
                <img src="${member.image}" alt="${member.name}" class="spotlight-image">
                <h3>${member.name}</h3>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>`;   

                spotlightContainer.appendChild(card);
        });
    }
}


fetchJson();