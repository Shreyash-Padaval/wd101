let users = [];

let table = document.getElementById('users');

let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let password = document.getElementById('password').value.trim();
  let dob = document.getElementById('dob').value.trim();
  let terms = document.getElementById('terms').checked;

  if (!isValidEmail(email)) {
    alert('Invalid email address');
    return;
  }

  let age = calculateAge(dob);
  if (age < 18 || age > 55) {
    alert('Age must be between 18 and 55');
    return;
  }

  users.push({
    name: name,
    email: email,
    password: password,
    dob: dob,
    terms: terms
  });

  addRowToTable(name, email, password, dob, terms);

  form.reset();
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function calculateAge(dob) {
  let today = new Date();
  let birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  let month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function addRowToTable(name, email, password, dob, terms) {
  let row = table.insertRow();
  let nameCell = row.insertCell();
  let emailCell = row.insertCell();
  let passwordCell = row.insertCell();
  let dobCell = row.insertCell();
  let termsCell = row.insertCell();

  nameCell.textContent = name;
  emailCell.textContent = email;
  passwordCell.textContent = password;
  dobCell.textContent = dob;
  termsCell.textContent = terms

