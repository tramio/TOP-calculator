let result = "";
let operator = "";

function add(a, b) {
    return result = a + b;
}

function substract(a, b) {
    return result = a - b;
}

function multiply(a, b) {
    return result = a * b;
}

function divide(a, b) {
    return result = a / b;
}

function operate(operator, a, b) {
    a = parseInt(a);
    b = parseInt(b);
    switch (operator) {
        case "+":
            add(a, b);
            break;
        case "-":
            substract(a, b);
            break;
        case "×":
            multiply(a, b);
            break;
        case "÷":
            divide(a, b);
            break;
        default:
            break;
    }
    return result;
}

(function createButtons() {
    let buttonsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "×", "÷", "=", "clear"];
    for (i = 0; i < buttonsArray.length; i++) {
        const newButton = document.createElement("button");
        newButton.classList.add("buttons");
        newButton.setAttribute("id", `btn${buttonsArray[i]}`);
        newButton.setAttribute("value", buttonsArray[i]);
        newButton.textContent = buttonsArray[i];
        const calculatorBody = document.querySelector(".calculatorBody");
        calculatorBody.appendChild(newButton);
    }
})();

let btnArray = Array.from(document.querySelectorAll(".buttons"));

(function displayNumbers() {
    let displayValue = document.getElementById("displayValue");
    btnArray
        .filter(button => button.value >= 0 && button.value <= 9)
        .forEach(button => {
            button.addEventListener("click", () => displayValue.textContent += button.textContent);
        });
})();

(function getOperation() {
    btnArray
        .filter(button => (button.value).match(/[\+\-\×\÷]/))
        .forEach(button => {
            button.addEventListener("click", () => {
                a = displayValue.textContent;
                operator = button.value;
                displayValue.textContent = "";
            });
        });
})();

(function runOperation() {
    const equalButton = document.getElementById("btn=");
    equalButton.addEventListener("click", () => {
        b = displayValue.textContent;
        operate(operator, a, b);
        displayValue.textContent = result;
    });
})();

// If the next button pressed is a number, reset displayValue and go back to step 1. Else, go back to step 2.