// Get references to form elements
const submitForm = document.getElementById("submitForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

// Function to handle form submission
function handleFormSubmit(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve the values entered in the form fields
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  // Initialize a flag to check if all validations pass
  let isValid = true;

  // Validate the "name" field
  if (name === "") {
    isValid = false;
    displayError("name", "Please fill in your name.");
  } else {
    removeError("name");
  }

  // Validate the "email" field
  if (email === "") {
    isValid = false;
    displayError("email", "Please fill in your email.");
  } else if (!isValidEmail(email)) {
    isValid = false;
    displayError("email", "Please enter a valid email address.");
  } else {
    removeError("email");
  }

  // If all validations pass, display a success message and submit the form
  if (isValid) {
    alert("Form submitted successfully!");
    submitForm.submit();
  }
}

// Function to display an error message for a specific field
function displayError(fieldName, message) {
  const fieldElement = document.getElementById(fieldName);
  const errorElement = document.createElement("p");
  errorElement.className = "error";
  errorElement.textContent = message;
  fieldElement.parentNode.appendChild(errorElement);
}

// Function to remove an error message for a specific field
function removeError(fieldName) {
  const errorElement = document.querySelector(`#${fieldName}.error`);
  if (errorElement) {
    errorElement.remove();
  }
}

// Function to validate email format using a regular expression
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Add an event listener to the form to handle submission
submitForm.addEventListener("submit", handleFormSubmit);
