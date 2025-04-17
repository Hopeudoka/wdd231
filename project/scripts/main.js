// ========== Hamburger Menu Toggle ==========
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

menuBtn.addEventListener("click", () => {
  mainNav.classList.toggle("show");
});

// ========== Footer: Date and Last Modified ==========
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified;

// ========== LocalStorage Visit Counter ==========
const visitKey = "naijaWeddingVisits";
let visitCount = localStorage.getItem(visitKey);

if (!visitCount) {
  visitCount = 1;
} else {
  visitCount = parseInt(visitCount) + 1;
}

localStorage.setItem(visitKey, visitCount);

// Optional: display this on a page element (create it in HTML if needed)
const visitDisplay = document.getElementById("visitCount");
if (visitDisplay) {
  visitDisplay.textContent = `You have visited this site ${visitCount} time${visitCount > 1 ? "s" : ""}.`;
}

// ========== Fetch & Display JSON Data (Simulated Local Data) ==========
const dataURL = "data/weddings.json"; // or replace with real API

async function getWeddingData() {
  try {
    const response = await fetch(dataURL);
    if (!response.ok) throw new Error("Fetch failed");

    const data = await response.json();
    displayItems(data.weddings);
  } catch (err) {
    console.error("Error loading data:", err);
  }
}

function displayItems(items) {
  const container = document.getElementById("data-display");
  if (!container) return;

  items.forEach(item => {
    const card = document.createElement("section");
    card.classList.add("data-card");

    card.innerHTML = `
      <h3>${item.title}</h3>
      <p><strong>Date:</strong> ${item.date}</p>
      <p><strong>Location:</strong> ${item.location}</p>
      <p><strong>Tradition:</strong> ${item.tradition}</p>
      <p><strong>Highlight:</strong> ${item.highlight}</p>
    `;

    card.addEventListener("click", () => showModal(item));
    container.appendChild(card);
  });
}

// ========== Modal Dialog ==========
function showModal(item) {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");

  modalContent.innerHTML = `
    <h2>${item.title}</h2>
    <p><strong>Date:</strong> ${item.date}</p>
    <p><strong>Location:</strong> ${item.location}</p>
    <p>${item.description}</p>
    <button id="closeModal">Close</button>
  `;

  modal.classList.add("open");

  document.getElementById("closeModal").addEventListener("click", () => {
    modal.classList.remove("open");
  });
}

// Call fetch on pages where you need dynamic data
if (document.getElementById("data-display")) {
  getWeddingData();
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) return;

    const formData = { name, email, message };
    localStorage.setItem("formSubmission", JSON.stringify(formData));

    // Redirect to confirmation page
    window.location.href = "form-confirmation.html";
  });
}
