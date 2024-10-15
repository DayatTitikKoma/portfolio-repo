// Smooth Scroll to Section
document.querySelectorAll("a[data-section]").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const sectionID = this.getAttribute("data-section");
    document.getElementById(sectionID).scrollIntoView({ behavior: "smooth" });
  });
});

// Fitur slide ketika user mengetik 'about' atau 'services'
let userInput = "";
document.addEventListener("keydown", function (event) {
  const keyPressed = event.key.toLowerCase();

  userInput += keyPressed;

  // Untuk mengecek kata 'about'
  if (userInput.includes("about")) {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    userInput = ""; // reset setelah berhasil
  }

  // Untuk mengecek kata 'services'
  if (userInput.includes("services")) {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
    userInput = ""; // reset setelah berhasil
  }
});

// Popup functionality remains unchanged
function showPopup(message) {
  document.getElementById("popup-text").innerText = message;
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Function to filter portfolio projects
function filterProjects(category) {
  let items = document.querySelectorAll(".portfolio-item");
  let buttons = document.querySelectorAll(".category-btn");

  // Toggle active button
  buttons.forEach((btn) => btn.classList.remove("active"));
  document
    .querySelector(`[onclick="filterProjects('${category}')"]`)
    .classList.add("active");

  // Filter items
  items.forEach((item) => {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block"; // Show items of the selected category
      item.style.animation = "fadeIn 0.5s ease"; // Fade-in effect
    } else {
      item.style.display = "none"; // Hide other items
    }
  });
}

// Fade-in Animation for portfolio items
document.querySelectorAll(".portfolio-item").forEach((item) => {
  item.style.animation = "fadeIn 0.5s ease";
});

// CSS keyframes for fadeIn animation
let styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}`;
document.head.appendChild(styleSheet);

// Function to handle form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Here you can add code to send the data to your server or API
    // For demonstration, we'll just show a success message
    document.getElementById(
      "response-message"
    ).innerText = `Thank you, ${name}! Your message has been sent.`;

    // Reset the form
    this.reset();
  });

function openPopup(project) {
  const popup = document.getElementById("popup");
  const title = document.getElementById("popup-title");
  const description = document.getElementById("popup-description");

  // Set title and description based on project
  if (project === "project1") {
    title.innerText = "Project 1";
    description.innerText = "Description for Project 1.";
  } else if (project === "project2") {
    title.innerText = "Project 2";
    description.innerText = "Description for Project 2.";
  } else if (project === "project3") {
    title.innerText = "Project 3";
    description.innerText = "Description for Project 3.";
  }

  popup.style.display = "block"; // Show the popup
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none"; // Hide the popup
}

// Close popup when clicking outside of the popup content
window.onclick = function (event) {
  const popup = document.getElementById("popup");
  if (event.target === popup) {
    closePopup();
  }
};

function filterProjects(category) {
  let items = document.querySelectorAll('.portfolio-item');
  items.forEach(item => {
    if (item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

  // Menambahkan kelas 'active' pada button yang diklik
  let buttons = document.querySelectorAll('.category-btn');
  buttons.forEach(button => button.classList.remove('active'));
  event.target.classList.add('active');
}
