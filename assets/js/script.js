const phoneNumber = document.querySelector("#phone-number");

phoneNumber.addEventListener("input", () => {
  if (phoneNumber.validity.patternMismatch) {
    phoneNumber.setCustomValidity("Ensure your number is correct and formatted correctly.");
  } else {
    phoneNumber.setCustomValidity("");
  }
});