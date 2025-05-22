document.addEventListener("DOMContentLoaded", function () {
  const catFactBtn = document.getElementById("cat-fact-btn");
  const catFactDisplay = document.getElementById("cat-fact-display");
 
 //Random facts generator
  const facts = [
    "Cats sleep for around 13 to 16 hours a day!",
    "A group of cats is called a clowder.",
    "Cats have over 20 muscles that control their ears.",
    "Most cats don’t have eyelashes.",
    "Each cat’s nose print is as unique as a human fingerprint."
  ];

  catFactBtn.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * facts.length);
    catFactDisplay.textContent = facts[randomIndex];
  });
});

// Toggle light/dark mode
document.getElementById('mode-toggle').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});


// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
