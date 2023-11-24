const email = document.querySelector("#email");

const errorMsg = document.querySelector(".error-msg");

const form = document.querySelector("form");

const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;

form.addEventListener("submit", handleSubmit);

function isValidEmail(value) {
  return emailRegex.test(value);
}

function handleError() {
  errorMsg.innerText = "enter a valid email";
  email.classList.add("input-invalid");
}

function checkEmail() {
  if (isValidEmail(email.value)) {
    errorMsg.innerText = "";
    email.classList.remove("input-invalid");
    generateSuccessMsg();
  } else {
    handleError();
  }
}

function generateSuccessMsg() {
  const main = document.querySelector("main");
  main.innerHTML = `<div class="success">
  <img src="./assets//images/icon-success.svg" alt="">
  <h1>Thanks for subscribing!</h1>
  <p>
    A confirmation email has been sent to <b>${email.value}</b>. Please
    open it and click the button inside to confirm your subscription.
  </p>
  <button class="btn">Dismiss message</button>
</div>`;
  const dismiss = document.querySelector(".success .btn");
  dismiss.addEventListener("click", () => window.location.reload());
}

function handleSubmit(e) {
  e.preventDefault();
  checkEmail();
}
