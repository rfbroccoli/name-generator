document.addEventListener("DOMContentLoaded", function () {
  // class မို့လို့ fullstop
  const display = document.querySelector(".display");
  // id မို့လို့ #
  const button = document.querySelector("#button");

  display.innerHTML = "welcome to name generator";

  const names = ["Aung", "Bo", "Daung", "Hein", "Kaung"];

  button.addEventListener("click", generateName);

  function generateName() {
    // let name = ""
    // 0 - 1 : 0.231 , 0.4, 0.999
    // 0.001 -> 0.005
    // 0.21 -> 1.05
    // 0.42 -> 2.
    // 0.6 -> 3.
    // 0.8 -> 4.
    // 0.9 -> 4.
    const randomNumber1 = Math.floor(Math.random() * names.length);
    display.innerHTML = names[randomNumber1];
  }
});
