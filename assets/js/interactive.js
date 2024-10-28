inputName.addEventListener("input", handleİnputName);
inputCardNumber.addEventListener("input", handleİnputNumber);
inputDateMonth.addEventListener("input", handleİnputMonth);
inputDateYear.addEventListener("input", handleİnputYear);
inputCvc.addEventListener("input", handleİnputCvc);
confirmBtn.addEventListener("click", confirmAction);

function handleİnputName() {
  userName.innerText = inputName.value.toLocaleUpperCase('TR');
}
function handleİnputNumber(e) {
  let input = e.target.value.replace(/\D/g, "")
  input = input.substring(0, 16);

  if(input.length > 4) {
    input = input.match(/.{1,4}/g).join(" ");
  }
  e.target.value = input;
  cardNumber.value = input
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function confirmAction() {
  const containsNumber = numbers.some(number => inputName.value.includes(number));
  if(inputName.value === "" || containsNumber) {
    inputName.style.border = "1px solid #FF5050";
    warningCardName.style.display = "block";
  }

  // Card Number Error
  let lengthOfValue = inputCardNumber.value.length;

  if(inputCardNumber.value === "" && lengthOfValue !== 16) {
    inputCardNumber.style.border = "1px solid #FF5050";
    warningCardNumber.style.display = "block";
  }
  // Card Month Error

  if(inputDateMonth.value === "") {
    inputDateMonth.style.border = "1px solid #FF5050";
  }

  // Card Year Error

  if(inputDateYear.value === "") {
    inputDateYear.style.border = "1px solid #FF5050";
  }

  // Card CVC Error
  if(inputCvc.value === "") {
    inputCvc.style.border = "1px solid #FF5050";
    warningCvc.style.display = "block";
  }

  // Card Successful

  if((inputName.value != "" || !containsNumber) && (inputCardNumber.value != "") && (inputDateMonth.value != "") && (inputDateYear.value != "") && (inputCvc.value != "")) {
    document.querySelector(".card-form").style.display = "none";
    document.querySelector(".confirm-info").style.display = "block";
    confirmBtn.innerText = "Continue";
  }

}

function handleİnputMonth(e) {
  let input = e.target.value.replace(/\D/g, "");
  input = input.substring(0, 2);
  e.target.value = input;
  cardMonth.innerText = `${input} /`;
}

function handleİnputYear(e) {
  let input = e.target.value.replace(/\D/g, "");
  input = input.substring(0, 2);
  e.target.value = input;
  cardYear.innerText = `${input}`;
}

function handleİnputCvc(e) {
  let input = e.target.value.replace(/\D/g, "");
  input = input.substring(0, 3);
  e.target.value = input;
  cvc.value = `${input}`;
}