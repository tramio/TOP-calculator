let result = "";

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
        case "*":
            multiply(a, b);
            break;
        case "/":
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
        newButton.setAttribute("id", `btn${buttonsArray[i]}`)
        newButton.textContent = buttonsArray[i];
        const calculatorBody = document.querySelector(".calculatorBody");
        calculatorBody.appendChild(newButton);
    }
})()