// Get references to HTML elements
const form = document.getElementById('registration-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const dobInput = document.getElementById('dob');
const termsInput = document.getElementById('terms');
const table = document.getElementById('registration-table');

// Function to add a row to the table
function addTableRow(name, email, password, dob, termsAccepted) {
  const newRow = table.insertRow();

  const nameCell = newRow.insertCell();
  nameCell.innerText = name;

  const emailCell = newRow.insertCell();
  emailCell.innerText = email;

  const passwordCell = newRow.insertCell();
  passwordCell.innerText = password;

  const dobCell = newRow.insertCell();
  dobCell.innerText = dob;

  const termsCell = newRow.insertCell();
  termsCell.innerText = termsAccepted ? 'Yes' : 'No';
}

// Handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the default form submission behavior

  // Get form input values
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const dob = dobInput.value;
  const termsAccepted = termsInput.checked;

  // Validate input values
  if (!name || !email || !password || !dob || !termsAccepted) {
    alert('Please fill in all fields and accept the terms');
    return;
  }

  // Add the data to the table
  addTableRow(name, email, password, dob, termsAccepted);

  // Clear the form
  form.reset();
});
