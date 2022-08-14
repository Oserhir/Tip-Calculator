let billInput = document.getElementById("billTotalInput");
let messageDanger = document.getElementById("Danger");
let tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");
const increasePeople = document.querySelectorAll("Button")[0];
const decreasePeople = document.querySelectorAll("Button")[1];
const btnDecrease = document.getElementsByClassName("buttonContainer")[1];

window.onload = () => {
  numberOfPeople = 1;
  perPersonTotalDiv.innerText = `$0.00`;
  billInput.value = "";
  tipInput.value = "";
};

// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

// ** Calculate the total bill per person **
const calculateBill = () => {
  if (billInput.value == "") {
    messageDanger.classList.remove("hidden");
  } else {
    messageDanger.classList.add("hidden");
    const bill = parseInt(billInput.value);
    let tip = parseInt(tipInput.value) / 100;
    if (isNaN(tip)) {
      tip = 0;
    }
    const numberPerson = parseInt(numberOfPeople);
    const tipAmount = bill / numberPerson;
    const total = tipAmount + tipAmount * tip;
    perPersonTotalDiv.innerText = `$${total.toFixed(2)}`;
  }
};

// ** Splits the bill between more people **
increasePeople.addEventListener("click", () => {
  if (billInput.value == "") {
    messageDanger.classList.remove("hidden");
  } else {
    btnDecrease.removeAttribute("id");
    messageDanger.classList.add("hidden");
    numberOfPeople++;
    numberOfPeopleDiv.innerText = numberOfPeople;
    calculateBill();
  }
});

// ** Splits the bill between fewer people **
decreasePeople.addEventListener("click", () => {
  if (numberOfPeople > 1) {
    btnDecrease.removeAttribute("id");
    numberOfPeople--;
    numberOfPeopleDiv.innerText = numberOfPeople;
    calculateBill();
  } else {
    btnDecrease.setAttribute("id", "btnDecrease");
    return;
  }
});
