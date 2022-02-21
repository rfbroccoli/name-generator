document.addEventListener("DOMContentLoaded", function () {
  // class မို့လို့ dot / fullstop
  const display = document.querySelector(".display");
  // id မို့လို့ #
  const button = document.querySelector("#button");

  const input = document.querySelector(".input")

  const gender = document.querySelector("#gender")

  // display.innerHTML = "welcome to name generator";

  const maleNames = ["Aung", "Bo", "Daung", "Hein", "Kaung", "Khine", "Lwin", "Lin"];

  const femaleNames = ["Aye", "Hter", "Hnin",  "Khin"];

  const neutralNames = ["Aye", "Hter", "Hnin",  "Khin", "Aung", "Bo", "Daung", "Hein", "Kaung", "Khine", "Lwin", "Lin"];


  button.addEventListener("click", generateName);

  function generateName() {
    let name = ""
    // 0 - 1 : 0.231 , 0.4, 0.999
    // 0.001 -> 0.005
    // 0.21 -> 1.05
    // 0.42 -> 2.
    // 0.6 -> 3.
    // 0.8 -> 4.
    // 0.9 -> 4.
    // const randomNumber1 = Math.floor(Math.random() * maleNames.length);
    // display.innerHTML = maleNames[Math.floor(Math.random() * maleNames.length)];
    const times = input.value || 3

    for (let i = 0; i < times; i++) {
      let randomName
      if (gender.value === "male") {
        randomName = maleNames[Math.floor(Math.random() * maleNames.length)];
      } else if (gender.value === "female") {
        randomName = femaleNames[Math.floor(Math.random() * femaleNames.length)];
      } else {
        randomName = neutralNames[Math.floor(Math.random() * neutralNames.length)];
      }
      name = name + " " + randomName
      console.log(name)
    }
    
    display.innerHTML = name
  }
});


