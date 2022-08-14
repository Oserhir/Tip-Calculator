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
  const numberPerson = parseInt(numberOfPeopleDiv.innerText);
  const tipAmount = bill / numberPerson;
  const total = tipAmount + tipAmount * tip;
  perPersonTotalDiv.innerText = `$${total.toFixed(2)}`;
};
