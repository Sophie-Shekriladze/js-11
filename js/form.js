let formElement = document.getElementById("registration-form");

formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = {};
  let form = event.target;

  let username = document.getElementById("username-field").value;
  if (username == "" || username.length < 5) {
    errors.username = "username cant be empty";
  }

  // password
  let password1 = document.getElementById("password-field1").value;
  let password2 = document.getElementById("password-field2").value;

  if (password1 == "") {
    errors.password = "password cant be empty";
  }

  if (password1 != password2) {
    //არ უდრის
    errors.password2 = "password dont match";
  }

  //checkbox

  let agreTerms = document.getElementById("agree").checked;

  if (!agreTerms) {
    errors.agree = "you must agre our terms";
  }

  //radio
  let age = false;
  form.querySelectorAll("[name = 'age']").forEach((item) => {
    if (item.checked) {
      age = true;
    }
  });

  if (!age) {
    errors.age = "please select your age";
  }

  console.log(errors);

  document.querySelectorAll(".error-text").forEach((element) => {
    element.innerHTML = "";
  });

  //error object

  for (let item in errors) {
    console.log("obj key = ", item);

    let errorText = document.getElementById("error-" + item);
    if (errorText) {
      errorText.innerText = errors[item];
    }
  }

  if (Object.keys(errors).length == 0) {
    form.submit();
  }
});

//show hide passsword

let passswordField = document.getElementById("password-field1");
let toggleIcon = document.getElementById("toggleIcon");

toggleIcon.addEventListener("click", function () {
  if (passswordField.type == "password") {
    passswordField.setAttribute("type", "text");
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passswordField.setAttribute("type", "password");
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
});

//email regex

let emailField = document.getElementById("emailField");

emailField.addEventListener("keyup", function () {
  let emailFieldVAlue = document.getElementById("emailField").value;
  let perrortext = document.getElementById("error-email");

  let emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailFieldVAlue.match(emailPattern)) {
    emailField.style.border = "2px solid green";
    emailField.style.outline = "none";
    perrortext.innerHTML = "your email is valid";
    perrortext.style.color = "green";
  } else {
    emailField.style.border = "2px solid red";
    perrortext.innerHTML = "your email is invalid";
    perrortext.style.color = "red";
    emailField.style.outline = "none";
  }
});
