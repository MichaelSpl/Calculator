function display(sym) {
  document.getElementById("output").value += sym;
}

function decimal() {
  document.getElementById("output").value += '.';
}

let parAmt = 0;

function clearScreen() {
  document.getElementById("output").value = "";
  parAmt = 0;
}

function parenthesis() {
  let exp = document.getElementById("output").value;
  if (exp.length >= 1) {
    let index = exp.charAt(exp.length - 1);
    if (index == "(" || (index == ")" && parAmt <= 0)) {
      document.getElementById("output").value += "(";
      parAmt++;
    } else if (index == "+" || index == "-" || index == "X" || index == "÷") {
      document.getElementById("output").value += "(";
      parAmt++;
    } else if (!isNaN(index) && parAmt <= 0) {
      document.getElementById("output").value += "(";
      parAmt++;
    } else if (parAmt > 0) {
      parAmt--;
      document.getElementById("output").value += ")";
    }
  } else {
    document.getElementById("output").value += "(";
    parAmt++;
  }
}

function solveExp() {
  let exp = document.getElementById("output").value;
  let result = 0;
  let stack = [];
}
