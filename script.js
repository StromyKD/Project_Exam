const form = document.getElementById('person-form');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const hobbyInput = document.getElementById('hobby');
const message = document.getElementById('message');
const list = document.getElementById('people-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const fullName = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  const age = parseInt(ageInput.value.trim());
  const hobby = hobbyInput.value.trim(); 

  if (fullName === "" || email === "" || isNaN(age)) {
    showMessage("Please fill in all required fields.");
    return;
  }

  if (!isValidEmail(email)) {
    showMessage("Invalid email address.");
    return;
  }

  if (age <= 0) {
    showMessage("Age must be a positive number.");
    return;
  }

  if (age > 18) {
    addPersonToList(fullName, email, age, hobby);
    form.reset();
    message.textContent = "";
  } else {
    showMessage("You must be over 18 to submit.");
  }
});

function showMessage(text) {
  message.textContent = text;
  message.style.color = "red";
}

function isValidEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}

function addPersonToList(fullName, email, age, hobby) {
  const li = document.createElement('li');
  li.innerHTML = `
    <strong>Full Name:</strong> ${fullName}<br />
    <strong>Email:</strong> ${email}<br />
    <strong>Age:</strong> ${age}<br />
    <strong>Hobby:</strong> ${hobby || 'N/A'}
  `;
  list.appendChild(li);
}
