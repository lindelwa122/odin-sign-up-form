const phoneNumber = document.querySelector("#phone-number");

phoneNumber.addEventListener("input", () => {
  if (phoneNumber.validity.patternMismatch) {
    phoneNumber.setCustomValidity("Ensure your number is correct and formatted correctly.");
  } else {
    phoneNumber.setCustomValidity("");
  }
});

const toggleVisibility = (selector, action="show") => {
  const element = document.querySelector(selector);

  switch (action) {
    case "show":
      element.style.height = element.scrollHeight + "px";
      break;

    case "hide":
      element.style.height = 0;
      break;
  }
}

phoneNumber.addEventListener("focus", () => {
  toggleVisibility("#phone-number + .helper");
});

phoneNumber.addEventListener("blur", () => {
  toggleVisibility("#phone-number + .helper", "hide");
});

const password = document.querySelector("#password");

password.addEventListener("focus", () => {
  toggleVisibility("#password + .helper");
});

password.addEventListener("blur", () => {
  toggleVisibility("#password + .helper", "hide");
});

const confirmPassword = document.querySelector("#confirm-password");

confirmPassword.addEventListener("focus", () => {
  toggleVisibility("#confirm-password + .helper");
});

confirmPassword.addEventListener("blur", () => {
  toggleVisibility("#confirm-password + .helper", "hide");
});

// Handle form submit
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  if (password.value !== confirmPassword.value) {
    toggleVisibility(".error");
    event.preventDefault();
  } else {
    toggleVisibility(".error", "hide");
  }
});