// Get references to the form and error message elements
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");
const errorElement = document.getElementById("error");

// Function to validate the password
function validatePassword() {
  // Regular expressions to check password criteria
  const minLength = 8;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const digitRegex = /\d/;
  const specialCharRegex = /[!@#$%^&*]/;

  // Get the entered password value
  const password = passwordInput.value;

  // Initialize an array to store error messages
  const errors = [];

  // Check each criterion and push error messages to the array if not met
  if (password.length < minLength) {
    errors.push("Password must be at least 8 characters long.");
  }
  if (!uppercaseRegex.test(password)) {
    errors.push("Password must contain at least one uppercase letter.");
  }
  if (!lowercaseRegex.test(password)) {
    errors.push("Password must contain at least one lowercase letter.");
  }
  if (!digitRegex.test(password)) {
    errors.push("Password must contain at least one numeric digit.");
  }
  if (!specialCharRegex.test(password)) {
    errors.push(
      "Password must contain at least one special character (e.g., !@#$%^&*).",
    );
  }

  // Display error messages or allow form submission
  if (errors.length > 0) {
    // Prevent form submission
    event.preventDefault();
    // Display error messages
    errorElement.textContent = errors.join(" ");
  } else {
    // Clear any previous error messages
    errorElement.textContent = "";
  }
}

// Add a submit event listener to the form
passwordForm.addEventListener("submit", validatePassword);
