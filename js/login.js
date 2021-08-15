const submit = document.querySelector(".submit");
const nameField = document.querySelector(".username");
const passField = document.querySelector(".password");
const credentials = {
  name: "username",
  password: "userpassword",
};

function timer() {
  let time = 3;
  let timerInterval;

  function countdown() {
    time--;
    document.getElementById("countdown").innerHTML = time;
    if (time <= 0) {
      clearInterval(timerInterval);
    }
  }
  timerInterval = setInterval(() => {
    countdown();
  }, 1000);
}

function userMessage({ error = "", success = "" }) {
  const errorDiv = document.getElementById("error");
  const errorText = document.createElement("p");

  errorText.appendChild(document.createTextNode(error));
  errorDiv.appendChild(errorText);

  const successDiv = document.getElementById("success");
  const successText = document.createElement("p");
  successText.appendChild(document.createTextNode(success));
  successDiv.appendChild(successText);

  function clearError() {
    errorText.remove();
  }
  setTimeout(clearError, 3000);
}

submit.addEventListener("click", (e) => {
  const rocketWrap = document.querySelector(".rocket-wrap");
  const smoke = document.getElementById("smoke-animation");
  const rocket = document.getElementById("rocket-animation");
  if (
    nameField.value === credentials.name &&
    passField.value === credentials.password
  ) {
    rocketWrap.style.visibility = "visible";
    rocket.classList.add("lift-off");
    smoke.classList.add("smoke");
    userMessage({ success: `Lift off!` });
    timer();
    window.setTimeout(function () {
      window.location.href = "apod.html";
    }, 5000);
  } else {
    userMessage({ error: `Hey Buzz, your details seem to be wrong!` });
    nameField.value = "";
    passField.value = "";
  }

  e.preventDefault();
});
