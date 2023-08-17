function clearScreen() {
    document.getElementById("output").value = "";
}

function display(sym) {
    document.getElementById("output").value += sym;
}

function solveExp() {
    let exp = document.getElementById("output").value;
    alert(exp);
}