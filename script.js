let btnNumbers = document.querySelectorAll(".numberBtn");

let numbers = [];

for (let i = 0; i < btnNumbers.length; i++) {
  btnNumbers[i].addEventListener("click", function () {
    const number = btnNumbers[i].textContent;
    numbers.push(number);
    document.querySelector(".display").textContent += number;
    console.log(number);
    return number;
  });
}
