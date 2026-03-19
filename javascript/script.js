const ownerName = document.getElementById("ownerName");
const mobile = document.getElementById("mobile");
const carName = document.getElementById("carName");
const carModel = document.getElementById("carModel");
const bookBtn = document.getElementById("bookBtn");

function checkForm() {
  if (
    ownerName.value.trim() !== "" &&
    mobile.value.trim() !== "" &&
    carName.value.trim() !== "" &&
    carModel.value.trim() !== ""
  ) {
    bookBtn.disabled = false;
    bookBtn.classList.add("active");
  } else {
    bookBtn.disabled = true;
    bookBtn.classList.remove("active");
  }
}

ownerName.addEventListener("input", checkForm);
mobile.addEventListener("input", checkForm);
carName.addEventListener("input", checkForm);
carModel.addEventListener("input", checkForm);

document.getElementById("serviceForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Service Booked Successfully ✅");
});