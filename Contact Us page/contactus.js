document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent real form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation if all fields aren't completed
    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields.");
      return;
    }

    // Basic email check if user enters email or not
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return;
    }

    // If everything is good and user does as told
    alert("Thank you! Your message has been sent.");
    form.reset(); // This part clears the form
    document.getElementById("char-count").textContent = "0 / 300";
  });

  // Character counter logic
  const messageInput = document.getElementById("message");
  const charCount = document.getElementById("char-count");

  messageInput.addEventListener("input", function () {
    const length = messageInput.value.length;
    charCount.textContent = `${length} / 300`;
    if (length > 300) {
      charCount.style.color = "red";
    } else {
      charCount.style.color = "#555";
    }
  });
});