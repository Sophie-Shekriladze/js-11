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
});
