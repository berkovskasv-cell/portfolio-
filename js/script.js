// Placeholder for future scripting (social links, etc.)
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());


window.SOCIAL = {
  phone: 'tel:+xxxxxxx', 
  email: 'mailto:berkovska.sv@gmail.com', 
  instagram: '#',
  teams: 'https://teams.microsoft.com/l/chat/0/0?users=s173057@ap.be.com',
  discord: '@lanaberk'
};

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("portfolio-dropdown");
  const dropdown = document.getElementById("portfolioDropdown");

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    dropdown.style.display =
      dropdown.style.display === "flex" ? "none" : "flex";
  });
});
