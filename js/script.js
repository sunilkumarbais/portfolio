// ====================
// Bootstrap Validation
// ====================
(() => {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

// ====================
// Navigation Highlight
// ====================
const navLinks = document.querySelectorAll(".nav-link");
const searchInput = document.getElementById("searchBox");
const sections = document.querySelectorAll("section");

function activateTab(tabText) {
  const normalizedText = tabText.trim().toLowerCase();
  navLinks.forEach(link => {
    const linkText = link.textContent.trim().toLowerCase();
    link.classList.toggle("active", linkText === normalizedText);
  });
}

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    const clickedText = e.currentTarget.textContent;
    activateTab(clickedText);
  });
});

// ====================
// Search Section Filter
// ====================
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
      section.style.display = "block";
    }
  });
}

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.trim();
  filterSections(query);
  activateTab(query);
});

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && firstMatch) {
    e.preventDefault();
    firstMatch.scrollIntoView({ behavior: "smooth" });
  }
});

// ====================
// Typing Animation
// ====================
document.addEventListener("DOMContentLoaded", function () {
  const skills = [
    "HTML", "CSS", "JavaScript", "Bootstrap",
    "Node.js", "Express.js", "MongoDB", "RESTful APIs"
  ];
  let skillIndex = 0;
  let charIndex = 0;
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const delayBetweenSkills = 1500;

  const typingText = document.querySelector(".typing-skill");

  function type() {
    if (charIndex < skills[skillIndex].length) {
      typingText.textContent += skills[skillIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenSkills);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingText.textContent = skills[skillIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      skillIndex = (skillIndex + 1) % skills.length;
      setTimeout(type, typingSpeed);
    }
  }

  type();
});

// ====================
// Scroll Animation
// ====================
window.addEventListener("scroll", () => {
  document.querySelectorAll(".animate-on-scroll").forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.classList.add("animated");
    }
  });
});

// ====================
// Equal Height for Project Cards
// ====================
function setEqualCardHeights() {
  const cards = document.querySelectorAll(".project-section .card");
  let maxHeight = 0;
  cards.forEach(card => {
    card.style.height = "auto";
    if (card.offsetHeight > maxHeight) {
      maxHeight = card.offsetHeight;
    }
  });
  cards.forEach(card => card.style.height = `${maxHeight}px`);
}
window.addEventListener("load", setEqualCardHeights);
window.addEventListener("resize", setEqualCardHeights);

// ====================
// Skills Stagger Animation
// ====================
function animateSkills() {
  const skillIcons = document.querySelectorAll(".skills-section .skill-tooltip");
  skillIcons.forEach((icon, index) => {
    setTimeout(() => {
      icon.classList.add("show-skill");
    }, index * 150);
  });
}
window.addEventListener("load", animateSkills);
