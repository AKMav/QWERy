const emailForm = document.querySelector("#email-form");
const input = document.querySelector("#form-input");
emailForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(`email - ${input.value}`);
  input.value = "";
});
