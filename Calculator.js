function clearScreen() {
  document.getElementById("output").value = "";
}

function display(sym) {
  document.getElementById("output").value += sym;
}

function negOrPos() {
  let exp = document.getElementById("output").value;
  if (exp.length == 0) {
    display("(-");
    return;
  }

  if(exp.length == 1) {
    document.getElementById("output").value = exp = "(-" + exp;
    return;
  }

  /* if (exp.length-3 > 0) {
    if (exp[exp.length-2] == "-" && exp[exp.length-3] == "(") {

    }
  } else {
    
  } */
}

function solveExp() {
  let exp = document.getElementById("output").value;
  let result = 0;
  let stack = [];
  // alert(exp[exp.length-1]);
}
