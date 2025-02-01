let expression = "";

function handleClick(event) {
    const value = event.target.value;

    if (value === "AC") {
        expression = "";
        document.getElementById("output").innerText = "0";
        return;
    }

    if (value === "=") {
        calculateResult();
        return;
    }

    expression += value;
    document.getElementById("output").innerText = expression;
}

function handleBackspace() {
    expression = expression.slice(0, -1); // Remove the last character
    document.getElementById("output").innerText = expression || "0"; // Show 0 if empty
}

function calculateResult() {
    try {
        let result = eval(expression);
        document.getElementById("output").innerText = result;
        expression = result.toString();
    } catch {
        document.getElementById("output").innerText = "Error";
        expression = "";
    }
}
