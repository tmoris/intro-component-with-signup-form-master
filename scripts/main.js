const form = document.querySelector('.signup-form');
const username = document.querySelector('.firstname');
const lastname = document.querySelector('.lastname');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const submitBtn = document.querySelector('.btn');

submitBtn.addEventListener('click', () => {
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
  formInputDiv.classList.toggle('alert-danger');
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