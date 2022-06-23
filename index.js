function getNumber(number) {
  var Number = (document.getElementById("input-box").value += number);
}
function clearDisplay() {
  document.getElementById("input-box").value = "";
}

function solve() {
  result = eval(document.getElementById("input-box").value);
  clearDisplay();
  document.getElementById("input-box").value = result;
}

function undo() {
  var numberUndo = document.getElementById("input-box").value;
  if (numberUndo != "") {
    newNumber = numberUndo.slice(0, -1);
    document.getElementById("input-box").value = newNumber;
    console.log(newNumber);
  } else {
    document.getElementById("input-box").value = "Error";
  }
}
