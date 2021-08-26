let result = "";
let operator = "";
let a = "";
let b = "";

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
    let buttonsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "×", "÷", "=", "clear"];
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
    let mainDisplay = document.getElementById("mainDisplay");
    mainDisplay.textContent = 0;
    btnArray
        .filter(button => button.value >= 0 && button.value <= 9)
        .forEach(button => {
            button.addEventListener("click", () =>
            mainDisplay.textContent == 0 || mainDisplay.textContent == result ?
            mainDisplay.textContent = button.value :
            mainDisplay.textContent += button.value);
        });
})();

const smallerDisplay = document.querySelector(".smallerDisplay");

(function getOperation() {
    btnArray
        .filter(button => (button.value).match(/[\+\-\×\÷]/))
        .forEach(button => {
            button.addEventListener("click", () => {
                if (mainDisplay.textContent == "0" && operator == "÷") {}
                else if (mainDisplay.textContent == "" && operator == button.value) {}
                else if (mainDisplay.textContent == "" && operator !== button.value) {
                    operator = button.value;
                    smallerDisplay.textContent = `${a} ${operator}`;
                }
                else if (a !== "" && operator !== "" && b === "") {
                    b = mainDisplay.textContent;
                    operate(operator, a, b);
                    operator = button.value;
                    smallerDisplay.textContent = `${result} ${operator}`;
                    mainDisplay.textContent = "";
                    a = result;
                    b = "";
                    result = "";
                }
                else {
                    a = mainDisplay.textContent;
                    operator = button.value;
                    smallerDisplay.textContent = `${a} ${operator}`;
                    mainDisplay.textContent = "";
                    b = "";
                    result = "";
                }
            });
        });
})();

(function runOperation() {
    const equalButton = document.getElementById("btn=");
    equalButton.addEventListener("click", () => {
        if (mainDisplay.textContent == result) {}
        else if (mainDisplay.textContent == "0" && operator == "÷") {}
        else {
            b = mainDisplay.textContent;
            operate(operator, a, b);
            smallerDisplay.textContent += ` ${b} =`;
            mainDisplay.textContent = result;
        }
    });
})();

const clearButton = document.getElementById("btnclear");
clearButton.addEventListener("click", () => {
    a = "";
    b = "";
    operator = "";
    result = "";
    smallerDisplay.textContent = "";
    mainDisplay.textContent = 0;
});