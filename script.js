// Get DOM elements
const loginModal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");
const forgotPasswordModal = document.getElementById("forgotPasswordModal");
const loginForm = document.querySelector("#loginModal form");
const registerForm = document.querySelector("#registerModal form");
const forgotPasswordForm = document.querySelector("#forgotPasswordModal form");
const loginLink = document.querySelector(".menu a[href='#loginModal']");
const registerLink = document.querySelector("a[href='#registerModal']");
const forgotPasswordLink = document.querySelector("a[href='#forgotPasswordModal']");
const loginFromRegisterLink = document.querySelector("#registerModal a[href='#loginModal']");
const loginFromForgotPasswordLink = document.querySelector("#forgotPasswordModal a[href='#loginModal']");

// Function to show the login modal
function showLogin() {
  loginModal.style.display = "flex";
  registerModal.style.display = "none";
  forgotPasswordModal.style.display = "none";
}

// Function to show the registration modal
function showRegisterForm() {
  loginModal.style.display = "none";
  registerModal.style.display = "flex";
  forgotPasswordModal.style.display = "none";
}

// Function to show the forgot password modal
function showForgotPasswordForm() {
  loginModal.style.display = "none";
  registerModal.style.display = "none";
  forgotPasswordModal.style.display = "flex";
}

// Add event listeners to switch back to login from register and forgot password modals
loginFromRegisterLink.addEventListener("click", showLogin);
loginFromForgotPasswordLink.addEventListener("click", showLogin);

// Event listener to close the login modal when clicking outside of it
window.addEventListener('click', function (event) {
  if (event.target == loginModal) {
    loginModal.style.display = 'none';
  }
});
