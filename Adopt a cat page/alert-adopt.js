// Alert message on Adopt Button
document.querySelectorAll('.adopt-button').forEach(button => {
  button.addEventListener('click', () => {
    alert("Thanks for choosing to adopt!");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const learnButtons = document.querySelectorAll(".learn-more-btn");

  learnButtons.forEach(button => {
    button.addEventListener("click", () => {
      const extraInfo = button.nextElementSibling;
      extraInfo.classList.toggle("show");
    });
  });
});



// Cat Search Filter 

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchCat");
  const ageFilter = document.getElementById("ageFilter");
  const catCards = document.querySelectorAll(".cat-card");

  function filterCats() {
    const searchValue = searchInput.value.toLowerCase();
    const ageValue = ageFilter.value;

    catCards.forEach(card => {
      const name = card.querySelector("h3").textContent.toLowerCase();
      const desc = card.querySelector("p").textContent.toLowerCase();
      let matchName = name.includes(searchValue);
      let matchAge = true;

      if (ageValue === "kitten") {
        matchAge = desc.includes("1 year") || desc.includes("under");
      } else if (ageValue === "young") {
        matchAge = desc.includes("1 year") || desc.includes("2 years");
      } else if (ageValue === "adult") {
        matchAge = desc.includes("3 years") || desc.includes("4 years") || desc.includes("5 years");
      }

      if (matchName && matchAge) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  searchInput.addEventListener("input", filterCats);
  ageFilter.addEventListener("change", filterCats);
  
  let debounceTimer;
searchInput.addEventListener("input", () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(filterCats, 300);
});
});

 

// Progress Bar Simulation 
const steps = document.querySelectorAll(".step");

steps.forEach((step, index) => {
  step.addEventListener("click", () => {
    steps.forEach((s, i) => {
      s.classList.toggle("active", i <= index);
    });
  });
});

