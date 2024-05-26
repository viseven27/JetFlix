var form = document.querySelector('form');
var email = document.getElementById('email');
var password = document.getElementById('password');
var confpassword = document.getElementById('confpassword');

function goToRegister() {
  // Redirect to register2.html after validation
  if (checkInput()) {
    window.location.href = "../register2/register2.html";
  }
}

function checkInput() {
  // Validate password
  if (password.value === '' || !checkAlphaNum(password.value)) {
    alert('Password cannot be empty and must be alphanumeric.');
    return;
  }

  // Validate confirm password
  if (confpassword.value !== password.value) {
    alert('Confirm password must match the original password.');
    return ;
  }

  // Validate email
  if (email.value === '' || !email.value.endsWith('@gmail.com')) {
    alert('Email must not be empty and must end with @gmail.com.');
    return ;
  }

  return true; // Validation successful
}

function checkAlphaNum(password) {
  var isNum = false;
  var isAlpha = false;

  for (var i = 0; i < password.length; i++) {
    if (isNaN(password[i])) {
      isAlpha = true;
    } else {
      isNum = true;
    }

    if (isAlpha && isNum) {
      return true;
    }
  }

  return false; // No alphanumeric characters found
}

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission
  goToRegister(); // Perform input validation and redirection
});
