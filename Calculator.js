function clearScreen() {
  document.getElementById("output").value = "";
}

function display(symbol) {
  let symbol = document.getElementById("output").value;
  document.getElementById("output").value += symbol;
}

function negOrPos() {
  let symbol = document.getElementById("output").value;
  let newSymbol = "";

  for (let i = symbol.length - 1; i >= 0; i--) {
    if (isNaN(symbol[i])) {
      // Insert "(-" before arithmetic expression even if expression is -.
      if(i-1 >= 0 && symbol[i-1] == "(") {
        newSymbol = symbol.slice(0, i-1) + symbol.slice(i+1);
        document.getElementById("output").value = newSymbol;
      } else {
        alert(symbol[i]);
        //newSymbol = symbol.slice(0, i) + "(-" + symbol.slice(i);
        //document.getElementById("output").value = newSymbol;
        document.getElementById("output").value = symbol + "(-";
      }
      return;
    }
  }
  
  document.getElementById("output").value = "(-" + symbol;
}

function solveProblem() {
  let symbol = document.getElementById("output").value;
  let result = 0;
  let stack = [];
  // alert(symbol[symbol.length-1]);
}
