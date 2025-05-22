// Alert message on Donate Button
const donateBtn = document.querySelector('.donate-button');
if (donateBtn) {
  donateBtn.addEventListener('click', () => {
    alert("Thanks for your generous donation!");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".donation-form form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent real submission
      alert("Thanks for your generous donation!");
      form.reset();
    });
  }
});