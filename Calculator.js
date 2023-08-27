function clearScreen() {
  document.getElementById("output").value = "";
}

function display(sym) {
  document.getElementById("output").value += sym;
}

function negOrPos() {
  let exp = document.getElementById("output").value;
  let newExp = "";

  for (let i = exp.length - 1; i >= 0; i--) {
    if (isNaN(exp[i])) {
      // Insert "(-" before arithmetic expression even if expression is -.
      if(i-1 >= 0 && exp[i-1] == "(") {
        newExp = exp.slice(0, i-1) + exp.slice(i+1);
        document.getElementById("output").value = newExp;
      } else {
        document.getElementById("output").value = exp + "(-";
      }
      return;
    }
  }
  
  document.getElementById("output").value = "(-" + exp;
}

function solveExp() {
  let exp = document.getElementById("output").value;
  let result = 0;
  let stack = [];
  // alert(exp[exp.length-1]);
}
