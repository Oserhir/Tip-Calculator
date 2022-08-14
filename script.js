const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");
const increasePeople = document.querySelectorAll("Button")[0];
const decreasePeople = document.querySelectorAll("Button")[1];

// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

// ** Calculate the total bill per person **
const calculateBill = () => {
  const bill = parseInt(billInput.value);
  let tip = parseInt(tipInput.value) / 100;
  if (isNaN(tip)) {
    tip = 0;
  }
  const numberPerson = parseInt(numberOfPeople);
  const tipAmount = bill / numberPerson;
  const total = tipAmount + tipAmount * tip;
  perPersonTotalDiv.innerText = `$${total.toFixed(2)}`;
};

// ** Splits the bill between more people **
increasePeople.addEventListener("click", () => {
  numberOfPeople++;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill();
});

// ** Splits the bill between fewer people **
decreasePeople.addEventListener("click", () => {
  if (numberOfPeople > 1) {
    numberOfPeople--;
    numberOfPeopleDiv.innerText = numberOfPeople;
    calculateBill();
  } else {
    throw "Hey! You cannot have less than 1 person!";
    return;
  }
});
