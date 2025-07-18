// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})();

// Select DOM elements
const navLinks = document.querySelectorAll(".nav-link");
const searchInput = document.getElementById("searchBox");
const sections = document.querySelectorAll("section");

// Utility: Activate navigation tab based on text
function activateTab(tabText) {
  const normalizedText = tabText.trim().toLowerCase();

  navLinks.forEach(link => {
    const linkText = link.textContent.trim().toLowerCase();
    link.classList.toggle("active", linkText === normalizedText);
  });
}

// Handle navigation click
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    const clickedText = e.currentTarget.textContent;
    activateTab(clickedText);
  });
});

// Handle search filtering
let firstMatch = null;

function filterSections(query) {
  firstMatch = null;
  const normalizedQuery = query.toLowerCase().trim();

  sections.forEach(section => {
    const heading = section.querySelector("h2")?.textContent.toLowerCase() || "";

    const isMatch = heading.includes(normalizedQuery) || normalizedQuery === "";
    section.style.display = isMatch ? "block" : "none";

    if (!firstMatch && isMatch && normalizedQuery !== "") {
      firstMatch = section;
    }
  });
}

// Search input event
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.trim();
  filterSections(query);
  activateTab(query);
});

// Scroll to first match on Enter
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && firstMatch) {
    e.preventDefault();
    firstMatch.scrollIntoView({ behavior: "smooth" });
  }
});
