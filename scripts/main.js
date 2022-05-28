const form = document.getElementById('signup-form');
const username = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', () => {
// run a funtion that check for user inputs 
  checkInputs();
});

function checkInputs() {
  // creating variable to store user input values, use trim function to remove white spaces from inputs
const firstnameValue = firstname.value.trim();
const lastnameValue = lastname.value.trim();
const eamilValue = email.value.trim();
const passwordValue = password.value.trim();

if(firstnameValue === '') {
  //create a function that carries of the below points
  // add error class to the parent of input element
// return error message
 
  const formInputDiv = document.querySelector('.form-row');
  formInputDiv.classList.add('alert-danger');
  const small = formRow.querySelector('.form-alert');
  small.classList.add('alert-danger');


}else {
  // add a success class to the parent of the input element
  // return success messsage

  setSuccess(firstname);
}

function setError(element, errorMessage) {

  
  
  }
}