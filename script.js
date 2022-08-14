const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");
const increasePeople = document.querySelectorAll("Button")[0];
const decreasePeople = document.querySelectorAll("Button")[1];

// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText);
