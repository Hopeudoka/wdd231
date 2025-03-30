// const url = "https://raw.githubusercontent.com/Hopeudoka/wdd231/main/chamber/data/members.json";

async function fetchJson() {
    try {
        let response = await fetch("data/members.json");
        let data = await response.json();
        const members = data.members;

        const eligibleMembers = members.filter(member =>
            member.membership_level === "3 (Goold)"  || member.membership_level
            === "2 (Silver)"
        );
        
        const randomCount = Math.random() > 0.5 ? 2 : 3;
        const shuffled = [...eligibleMembers].sort(() => 0.5 - Math.random());
        const spotlightMembers = shuffled.slice(0, randomCount);

        displayspotlights(spotlightMembers);
    } catch (error) {
        console.error(error);
    }
    
}



