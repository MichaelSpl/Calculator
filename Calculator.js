function display(sym) {
  document.getElementById("output").value += sym;
}

function decimal() {
  document.getElementById("output").value += ".";
}

function percent() {
  document.getElementById("output").value += "%";
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
    } else if (index == "+" || index == "-" || index == "*" || index == "/") {
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

function prec(s) {
  if (s == "^") return 3;
  else if (s == "/" || s == "*") return 2;
  else if (s == "+" || s == "-") return 1;
  else return -1;
}

function infixToPostfix(expr, input) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    let curr = input[i];

    if (
      (curr >= "a" && curr <= "z") ||
      (curr >= "A" && curr <= "Z") ||
      (curr >= "0" && curr <= "9")
    )
      result += curr;
    else if (curr == "(") expr.push("(");
    else if (curr == ")") {
      while (expr[expr.length - 1] != "(") {
        result += expr[expr.length - 1];
        expr.pop();
      }
      expr.pop();
    } else {
      while (
        expr.length != 0 &&
        prec(input[i]) <= prec(expr[expr.length - 1])
      ) {
        result += expr[expr.length - 1];
        expr.pop();
      }
      expr.push(curr);
    }
  }

  // Pop all the remaining elements from the stack
  while (expr.length != 0) {
    result += expr[expr.length - 1];
    expr.pop();
  }

  return result;
}

function solveProblem() {
  let input = document.getElementById("output").value;
  let result = 0.0;
  let expr = [];
  //Convert infix to postfix. Do decimal and parenthesis during this process.
  //(If percent or decimal find no number before them than an error is thrown.)
  let postFix = infixToPostfix(expr, input);
  for (let i = 0; i < postFix.length; i++) {
    let curr = postFix[i];
  }
}
