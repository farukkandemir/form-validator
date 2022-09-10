"use strict";
const form = document.querySelector(".form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const btnSubmit = document.querySelector(".btn-submit");

/* Create a function that chechs requreid field() 
    1- If all fields are empty make visible all error message  
    2- make the bacgroungd color green by adding success class
*/

const errorMessage = function (input, message) {
  const parent = input.parentElement;
  parent.classList.add("error");
  const small = parent.querySelector("small");
  small.textContent = message;
};

const successMessage = function (input) {
  const parent = input.parentElement;
  parent.classList.add("success");
};

const checkLength = function (input, min, max) {
  if (input.value.length < min) {
    errorMessage(input, `${input.id} should be at least ${min} characters`);
  } else if (input.value.length > max) {
    errorMessage(input, `${input.id} shoul be maximum ${max} charecters`);
  } else {
    successMessage(input);
  }
};

const checkRequired = function (fieldArr) {
  fieldArr.forEach(function (eachField) {
    if (eachField.value === "") {
      errorMessage(eachField, `${eachField.id} is required`);
      console.log(eachField.id);
    } else {
      successMessage(eachField);
    }
  });
};

const checkPasswordMatch = function (input1, input2) {
  if (pass1.value !== pass2.value) {
    errorMessage(input2, `Password do not match`);
  }
};

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 20);
  checkPasswordMatch(password, password2);
});
