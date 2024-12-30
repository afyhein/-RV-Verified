document.addEventListener("DOMContentLoaded", () => {
  const mainCheckmarkContainer = document.querySelector(".sec01 > .txt01 .checkmark-container");

  // Function to toggle the checked state of the checkmarks
  const toggleCheckmarks = (isChecked) => {
    const allCheckmarks = document.querySelectorAll(".card_container .checkmark");

    allCheckmarks.forEach((checkmark) => {
      const span = checkmark.querySelector("span");
      if (span) {
        span.innerHTML = isChecked ? "✔" : "&nbsp;"; // Use non-breaking space for empty state
      }
      checkmark.classList.toggle("checked", isChecked);
    });
  };

  // Add click event to the main checkmark container
  mainCheckmarkContainer.addEventListener("click", () => {
    const mainCheckmark = mainCheckmarkContainer.querySelector(".checkmark span");
    const masterchecker = document.querySelector("#checkmark");
    
    // Determine the new checked state before updating DOM
    const isChecked = mainCheckmark.textContent.trim() === ""; // If not checked, set to checked

    // Update the main checkmark state
    mainCheckmark.innerHTML = isChecked ? "✔" : "&nbsp;"; // Use non-breaking space
    mainCheckmarkContainer.querySelector(".checkmark").classList.toggle("checked", isChecked);
    masterchecker.classList.add("checkmarkClicked");

    // Toggle all other checkmarks
    toggleCheckmarks(isChecked);
  });
});
