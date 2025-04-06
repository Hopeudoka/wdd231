document.addEventListener('DOMContentLoaded', () => {
    const membershipData = {
      nonprofit: {
        title: "Non-profit Membership (Free)",
        content: "Ideal for community organizations, charities, and non-profits looking to stay connected and involved.<br>Benefits: Access to community newsletters and updates. Participation in general networking events. Access to select events and training opportunities"
      },
      bronze: {
        title: "Bronze Membership Benefits ($10/month)",
        content: "A great entry point for small businesses and startups wanting basic visibility and engagement.<br>Benefits:All Non-Profit level perks. Basic business listing in our directory. Invitation to exclusive member-only events. 10% discount on event tickets and workshops"
      },
      silver: {
        title: "Silver Membership Benefits ($20/month)",
        content: "Designed for growing businesses ready to expand their reach and gain more exposure.<br>Benefits: All Bronze level perks. Spotlight feature on homepage (rotating basis). Priority registration for events and training. 25% discount on event tickets and workshops. Access to targeted promotional opportunities"
      },
      gold: {
        title: "Gold Membership Benefits ($50/month)",
        content: "Our premium level – perfect for established businesses seeking maximum exposure, influence, and benefits.<br>Benefits: All Silver level perks. Permanent premium listing with logo and description. Featured spotlight placement on homepage and newsletter. First-access and exclusive invitations to VIP events. 50% discount on event tickets and workshops. Complimentary advertising packages"
      }
    };
  
    const dialog = document.getElementById("mydialog");
    const dialogTitle = dialog.querySelector("h2");
    const dialogContent = document.getElementById("dialogContent");
    const closeDialog = document.getElementById("closeDialog");
  
    closeDialog.addEventListener("click", () => {
      dialog.close();
    });

    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      card.addEventListener("click", (event) => {
        event.preventDefault();
        const membership = card.getAttribute("data-membership");
        const data = membershipData[membership];
        if (data) {
          dialogTitle.textContent = data.title;
          dialogContent.innerHTML = data.content;
          dialog.showModal();
        }
      });
    });
});