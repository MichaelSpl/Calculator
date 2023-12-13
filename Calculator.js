function clearScreen() {
  document.getElementById("output").value = "";
}

function display(sym) {
  /*let exp = document.getElementById("output").value;
  let end = exp.substr(exp.length - 1);
  if (isNaN(sym) && isNaN(end)) {
    if (exp[exp.length - 2] == "(") {
      if (sym == "÷" || sym == "X") {
        end = exp.slice(0, exp.length - 1);
        document.getElementById("output").value = end;
        return;
      }
    }
    // Problem here (click +/-, then X, then any other arithmetic symbol).
    end = exp.slice(0, exp.length - 1) + sym;
    document.getElementById("output").value = end;
  } else {
    document.getElementById("output").value += sym;
  }*/
  document.getElementById("output").value += sym;
}

let flip = false;

function parenthesis() {
  let exp = document.getElementById("output").value;
  if (exp.length >= 1) {
    let index = exp.charAt(exp.length - 1);
    if (!isNaN(parseInt(index)) && flip) {
      document.getElementById("output").value += ")";
      flip = !flip;
    } else if ((!isNaN(parseInt(index)) && !flip) || index === ".") {
      document.getElementById("output").value += "x(";
      flip = !flip;
    } else {
      document.getElementById("output").value += "(";
      if (!flip) {
        flip = !flip;
      }
    }
  } else {
    document.getElementById("output").value += "(";
    flip = !flip;
  }
}

function negOrPos() {
  let exp = document.getElementById("output").value;
  let newExp = "";

  for (let i = exp.length - 1; i >= 0; i--) {
    if (isNaN(exp[i])) {
      // Insert "(-" before arithmetic expression even if expression is -.
      if (i - 1 >= 0 && exp[i - 1] == "(") {
        newExp = exp.slice(0, i - 1) + exp.slice(i + 1);
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
}
