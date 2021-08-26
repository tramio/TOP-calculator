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
    a = Number(a);
    b = Number(b);
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
    result = +result.toFixed(9);
    return result;
}

(function createButtons() {
    let buttonsArray = [7, 8, 9, "+", "-", 4, 5, 6, "×", "÷", 1, 2, 3, "=", "del", 0, ".", "clear"];
    for (i = 0; i < buttonsArray.length; i++) {
        const newButton = document.createElement("button");
        newButton.classList.add("buttons");
        newButton.setAttribute("id", `btn${buttonsArray[i]}`);
        newButton.setAttribute("value", buttonsArray[i]);
        newButton.textContent = buttonsArray[i];
        const buttonsField = document.querySelector(".buttons-field");
        buttonsField.appendChild(newButton);
    }
})();
 
let btnArray = Array.from(document.querySelectorAll(".buttons"));

(function displayNumbers() {
    let mainDisplay = document.getElementById("mainDisplay");
    mainDisplay.textContent = 0;
    btnArray
        .filter(button => button.value >= 0 && button.value <= 9)
        .forEach(button => {
            button
                .addEventListener("click", () =>
                mainDisplay.textContent === "0." || mainDisplay.textContent === `${result}.`?
                mainDisplay.textContent += button.value :
                mainDisplay.textContent == 0 || mainDisplay.textContent == result ?
                mainDisplay.textContent = button.value :
                mainDisplay.textContent += button.value);
            button.classList.add("number-buttons");
        });
})();

(function displayDecimalPoint() {
    const decimalButton = document.getElementById("btn.");
    decimalButton.addEventListener("click", () => {
        if (mainDisplay.textContent == "") {
            mainDisplay.textContent = "0.";
        }
        if (!mainDisplay.textContent.includes(".")) {
            mainDisplay.textContent += decimalButton.value;
        }
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
                    removeLastPoint();
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
                    removeLastPoint();
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

function removeLastPoint() {
    if (mainDisplay.textContent.substring(mainDisplay.textContent.length-1) == ".") {
        return mainDisplay.textContent = mainDisplay.textContent.substring(0, mainDisplay.textContent.length-1);
    }
};

(function runOperation() {
    const equalButton = document.getElementById("btn=");
    equalButton.classList.add("em-buttons");
    equalButton.addEventListener("click", () => {
        if (mainDisplay.textContent == result) {operator = ""}
        else if (mainDisplay.textContent == "" || operator == "") {}
        else if (mainDisplay.textContent == "0" && operator == "÷") {}
        else {
            removeLastPoint();
            b = mainDisplay.textContent;
            operate(operator, a, b);
            smallerDisplay.textContent += ` ${b} =`;
            mainDisplay.textContent = result;
            operator = "";
        }
    });
})();

const clearButton = document.getElementById("btnclear");
clearButton.classList.add("em-buttons");
clearButton.addEventListener("click", () => {
    a = "";
    b = "";
    operator = "";
    result = "";
    smallerDisplay.textContent = "";
    mainDisplay.textContent = 0;
});

const delButton = document.getElementById("btndel");
delButton.addEventListener("click", () => {
    if (mainDisplay.textContent != result) {
        mainDisplay.textContent = mainDisplay.textContent.slice(0, -1);
        if (mainDisplay.textContent == "") {
            mainDisplay.textContent = 0;
        }
    }
});