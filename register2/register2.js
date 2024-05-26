var form = document.getElementById('registration-form');
var nameInput = document.getElementById('name');
var birthdateInput = document.getElementById('birthdate');
var maleGenderInput = document.getElementById('gender-male');
var femaleGenderInput = document.getElementById('gender-female');
var termsCheckbox = document.getElementById('terms');

function goToMovie() {
  // Redirect to movie.html after validation
  if (checkInput()) {
    window.location.href = "../movie/movie.html";
  }
}

function checkInput() {
  // Validate name
  if (nameInput.value === '') {
    alert('Name field cannot be empty.');
    return false;
  }

  // Validate birthdate format
  var birthdate = birthdateInput.value;
  var birthdatePattern = /^(0?[1-9]|[12][0-9]|3[01])-(0?[1-9]|1[0-2])-\d{4}$/;
  if (!birthdatePattern.test(birthdate)) {
    alert('Please enter a correct birthdate in the format: Day (1-31) - Month (1-12) - Year (4 digits)');
    return false;
  }

  // Validate gender
  if (!maleGenderInput.checked && !femaleGenderInput.checked) {
    alert('Please select a gender (Male/Female).');
    return false;
  }

  // Validate terms and conditions checkbox
  if (!termsCheckbox.checked) {
    alert('Please agree to the terms and conditions.');
    return false;
  }

  return true; // Validation successful
}

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission
  goToMovie(); // Perform input validation and redirection
});
