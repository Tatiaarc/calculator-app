const btnColor_1 = document.getElementById("btn_1");
const btnColor_2 = document.getElementById("btn_2");
const btnColor_3 = document.getElementById("btn_3");
const buttons = document.querySelectorAll(".number-button");
const input_box = document.getElementById("input-box");
const btnDel = document.getElementById("del");
const btnReset = document.getElementById("reset");
const btnEqual = document.getElementById("equal");
const sectionButtons = document.getElementById("section-buttons");
const sectionHeader = document.getElementById("section-header");
const togglesHolder = document.getElementById("toggles-holder");
const toggleButton = document.querySelectorAll(".toggle-button");

btnColor_1.addEventListener("click", function onClick(event) {
  document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
  sectionHeader.style.color = "white";
  togglesHolder.style.backgroundColor = "hsl(223, 31%, 20%)";
  togglesHolder.style.borderColor = "hsl(223, 31%, 20%)";
  toggleButton.forEach((toggle) => {
    toggle.style.backgroundColor = "hsl(6, 63%, 50%)";
  });

  input_box.style.backgroundColor = "hsl(224, 36%, 15%)";
  input_box.style.color = "white";
  buttons.forEach((button) => {
    button.style.backgroundColor = "hsl(30, 25%, 89%)";
    button.style.color = "hsl(221, 14%, 31%)";
  });
  btnDel.style.backgroundColor = "hsl(225, 21%, 49%)";
  btnDel.style.color = "white";
  btnReset.style.backgroundColor = "hsl(225, 21%, 49%)";
  btnEqual.style.backgroundColor = " hsl(6, 63%, 50%)";
  sectionButtons.style.backgroundColor = "hsl(223, 31%, 20%)";
  btnColor_2.style.backgroundColor = "transparent";
  btnColor_3.style.backgroundColor = "transparent";
});

btnColor_2.addEventListener("click", function onClick(event) {
  sectionHeader.style.color = "hsl(60, 10%, 19%)";
  togglesHolder.style.backgroundColor = "hsl(0, 5%, 81%)";
  togglesHolder.style.borderColor = "hsl(0, 5%, 81%)";
  toggleButton.forEach((toggle) => {
    toggle.style.backgroundColor = "hsl(25, 98%, 40%)";
  });

  document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
  input_box.style.backgroundColor = "white";
  input_box.style.color = "hsl(60, 10%, 19%)";
  buttons.forEach((button) => {
    button.style.backgroundColor = "hsl(45, 7%, 89%)";
    button.style.color = "hsl(60, 10%, 19%)";
  });
  btnDel.style.backgroundColor = "hsl(185, 42%, 37%)";
  btnDel.style.color = "white";
  btnReset.style.backgroundColor = "hsl(185, 42%, 37%)";
  btnEqual.style.backgroundColor = "hsl(25, 98%, 40%)";
  sectionButtons.style.backgroundColor = "hsl(0, 5%, 81%)";
  btnColor_1.style.backgroundColor = "transparent";
  btnColor_3.style.backgroundColor = "transparent";
});

btnColor_3.addEventListener("click", function onClick(event) {
  document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
  sectionHeader.style.color = "hsl(52, 100%, 62%)";
  togglesHolder.style.backgroundColor = "hsl(268, 71%, 12%)";
  togglesHolder.style.borderColor = "hsl(268, 71%, 12%)";
  toggleButton.forEach((toggle) => {
    toggle.style.backgroundColor = " hsl(176, 100%, 44%)";
  });

  input_box.style.backgroundColor = "hsl(224, 36%, 15%)";
  input_box.style.color = "hsl(52, 100%, 62%)";
  buttons.forEach((button) => {
    button.style.backgroundColor = "hsl(268, 47%, 21%)";
    button.style.color = "hsl(52, 100%, 62%)";
  });
  btnDel.style.backgroundColor = " hsl(281, 89%, 26%)";
  btnDel.style.color = "white";
  btnReset.style.backgroundColor = " hsl(281, 89%, 26%)";
  btnEqual.style.backgroundColor = "  hsl(176, 100%, 44%)";
  sectionButtons.style.backgroundColor = "hsl(268, 71%, 12%)";
  btnColor_1.style.backgroundColor = "transparent";
  btnColor_2.style.backgroundColor = "transparent";
});
