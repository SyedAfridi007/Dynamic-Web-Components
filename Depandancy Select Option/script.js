let firstInput = document.querySelector("#firstInput");

let secondInput = document.querySelector("#secondInput");


firstInput.addEventListener("change", function () {
  //console.log(firstInput.value);
  let inputOne = firstInput.value;
  let cities = [];
  if (inputOne === "Bangladesh") {
    cities = ["Dhaka", "Barishal", "Rajshahi", "Khulna", "Jossore", "Noakhali", "Cumilla"];
  }
  if (inputOne === "India") {
    cities = ["Dellhi", "Mumbai", "Hydrabad", "Pune", "Kolkata", "Rajstahn", "Gujrat"];
  }
  if (inputOne === "Pakistan") {
    cities = ["Islamabad", "Karachi", "Lahore", "Multan", "Quetta", "Peshwar", "Kashmir"];
  }
  if (inputOne === "Sri Lanka") {
    cities = ["Colombo", "Dambulla"];
  }

  var string = "";
  for (i = 0; i < cities.length; i++) {
    string = string + "<option value=" + cities[i] + ">" + cities[i] + "</option>";
  }
  secondInput.innerHTML = string;


});



