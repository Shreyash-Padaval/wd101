// Get the form element and the table element from the DOM
const form = document.getElementById("registration-form");
const table = document.getElementById("registration-table");

// Create an empty array to store the form submissions
let submissions = [];

// Function to add a new row to the table with the form data
function addTableRow(formData) {
  // Create a new row element
  const newRow = document.createElement("tr");

  // Create new cell elements for each piece of form data and add them to the row
  const nameCell = document.createElement("td");
  nameCell.textContent = formData.name;
  newRow.appendChild(nameCell);

  const emailCell = document.createElement("td");
  emailCell.textContent = formData.email;
  newRow.appendChild(emailCell);

  const passwordCell = document.createElement("td");
  passwordCell.textContent = formData.password;
  newRow.appendChild(passwordCell);

  const dobCell = document.createElement("td");
  dobCell.textContent = formData.dob;
  newRow.appendChild(dobCell);

  const termsCell = document.createElement("td");
  termsCell.textContent = formData.termsAccepted ? "Yes" : "No";
  newRow.appendChild(termsCell);

  // Add the new row to the table
  table.appendChild(newRow);
}

// Event listener for the form submission
form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the form data and add it to the submissions array
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    dob: document.getElementById("dob").value,
    termsAccepted: document.getElementById("terms").checked
  };
  submissions.push(formData);

  // Add the form data to the table
  addTableRow(formData);

  // Clear the form inputs
  form.reset();

  // Save the submissions array to local storage
  localStorage.setItem("submissions", JSON.stringify(submissions));
});

// On page load, get the saved submissions from local storage and add them to the table
const savedSubmissions = JSON.parse(localStorage.getItem("submissions"));
if (savedSubmissions) {
  submissions = savedSubmissions;
  savedSubmissions.forEach(addTableRow);
}
