// Get references to the form and error message elements
const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const errorElement = document.getElementById("error");

// Function to validate the email format
function validateEmail(event) {
  // Get the entered email value
  const email = emailInput.value;

  // Regular expression to check email format
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Check if the email format is correct
  if (!emailRegex.test(email)) {
    // Prevent form submission
    event.preventDefault();
    // Display error message
    errorElement.textContent = "Please enter a valid email address.";
  } else {
    // Clear any previous error messages
    errorElement.textContent = "";
  }
}

// Add a submit event listener to the form
emailForm.addEventListener("submit", validateEmail);
