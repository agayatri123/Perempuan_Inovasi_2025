// Tambahkan kode JavaScript kalian di file ini
function handleGetFormData(){
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const city = document.getElementById("city").value;
const zipCode = document.getElementById("zip-code").value;
const status = document.getElementById("status").checked;

return {name , email, city, zipCode, status};
}

// Input File Number Only 
function isNumber(input) {
    return !isNaN(input);
}

// Checkbox for Submission
function checkboxIsChecked(){
    return handleGetFormData().status;
}

// Validate Form Data 
function validateFormData(formData) {
  return formData !== null && isNumber(formData.zipCode) && checkboxIsChecked();

}

// Input Submission
function submit(event) {
  const warning = document.getElementById('warning');
  const formData = handleGetFormData();
  if (!validateFormData(formData)) {
    warning.innerHTML = "Periksa form anda sekali lagi";
    console.log('Form validation failed');
  } else {
    warning.innerHTML = "";
  }
}

document.getElementById('submit-form').addEventListener('click', (event) => {
  event.preventDefault();
  submit(event);
  console.log('semua di eksekusi')
});
