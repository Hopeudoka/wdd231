document.addEventListener('DOMContentLoaded', () => {
    const membershipData = {
      nonprofit: {
        title: "Non-profit Membership Benefits",
        content: "Gain basic access with community support and limited features. Cost: $5/month."
      },
      bronze: {
        title: "Bronze Membership Benefits",
        content: "Enjoy intermediate benefits including occasional training sessions and events. Cost: $10/month."
      },
      silver: {
        title: "Silver Membership Benefits",
        content: "Unlock premium benefits with full feature access, advertising spots, and event discounts. Cost: $20/month."
      },
      gold: {
        title: "Gold Membership Benefits",
        content: "Experience exclusive VIP access, premium events, and additional perks. Cost: $50/month."
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
          dialogContent.textContent = data.content;
          dialog.showModal();
        }
      });
    });
});