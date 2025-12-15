// Simple form toggle
const signInSection = document.getElementById('signInSection');
const signUpSection = document.getElementById('signUpSection');
const toggleSignUp = document.getElementById('toggleSignUp');
const toggleSignIn = document.getElementById('toggleSignIn');

// Toggle to Sign Up form
if (toggleSignUp) {
  toggleSignUp.addEventListener('click', function (e) {
    e.preventDefault();
    signInSection.classList.add('hidden');
    signUpSection.classList.remove('hidden');
  });
}

// Toggle to Sign In form
if (toggleSignIn) {
  toggleSignIn.addEventListener('click', function (e) {
    e.preventDefault();
    signUpSection.classList.add('hidden');
    signInSection.classList.remove('hidden');
  });
}

// Handle form submissions
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');

if (signInForm) {
  signInForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Sign In submitted');
    // Add your actual submission logic here
    alert('Sign In - Check console for details');
  });
}

if (signUpForm) {
  signUpForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Sign Up submitted');
    // Add your actual submission logic here
    alert('Sign Up - Check console for details');
  });
}
