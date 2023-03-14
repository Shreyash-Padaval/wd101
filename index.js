const form = document.querySelector('form');
const table = document.querySelector('table');

let entries = [];

// Load table headers on page load
window.addEventListener('load', () => {
  const headerRow = document.createElement('tr');
  const nameHeader = document.createElement('th');
  nameHeader.textContent = 'Name';
  const emailHeader = document.createElement('th');
  emailHeader.textContent = 'Email';
  const passwordHeader = document.createElement('th');
  passwordHeader.textContent = 'Password';
  const dobHeader = document.createElement('th');
  dobHeader.textContent = 'Dob';
  const acceptedHeader = document.createElement('th');
  acceptedHeader.textContent = 'Accepted terms?';

  headerRow.appendChild(nameHeader);
  headerRow.appendChild(emailHeader);
  headerRow.appendChild(passwordHeader);
  headerRow.appendChild(dobHeader);
  headerRow.appendChild(acceptedHeader);

  table.appendChild(headerRow);
});

// Add new entry to the table and array
function addEntry(name, email, password, dob, accepted) {
  entries.push({ name, email, password, dob, accepted });

  const newRow = document.createElement('tr');
  const nameCell = document.createElement('td');
  nameCell.textContent = name;
  const emailCell = document.createElement('td');
  emailCell.textContent = email;
  const passwordCell = document.createElement('td');
  passwordCell.textContent = password;
  const dobCell = document.createElement('td');
  dobCell.textContent = dob;
  const acceptedCell = document.createElement('td');
  acceptedCell.textContent = accepted;

  newRow.appendChild(nameCell);
  newRow.appendChild(emailCell);
  newRow.appendChild(passwordCell);
  newRow.appendChild(dobCell);
  newRow.appendChild(acceptedCell);

  table.appendChild(newRow);
}

// Validate email address
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Validate age
function validateAge(dob) {
  const today = new Date();
  const birthdate = new Date(dob);
  const age = today.getFullYear() - birthdate.getFullYear();
  const month = today.getMonth() - birthdate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }
  return age >= 18 && age <= 55;
}

// Submit event listener
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const dob = e.target.dob.value;
  const accepted = e.target.accepted.checked;

  if (validateEmail(email) && validateAge(dob)) {
    addEntry(name, email, password, dob, accepted);
    form.reset();
  } else {
    alert('Invalid email or age');
  }
});

// Load saved entries on page load
window.addEventListener('load', () => {
  const savedEntries = JSON.parse(localStorage.getItem('entries')) || [];
  savedEntries.forEach(entry => {
    addEntry(entry.name, entry.email, entry.password, entry.dob, entry.accepted);
  });
});

// Save entries to local storage on submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const dob = e.target.dob.value;
  const accepted = e.target.accepted.checked;

  if (validateEmail(email) && validateAge(dob)) {
    addEntry(name, email, password, dob,
