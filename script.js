const display = document.getElementById("display");
function appendToChange(input) {
  display.value += input;
}

function clearDisp() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
