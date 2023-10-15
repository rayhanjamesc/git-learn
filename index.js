//npm learning

let currentContent = ""; //Var to store current input
let operator = ""; //Var to store selected operator
let resultEl = document.getElementById("result");
let result = null; //Var to store the result of the previous operation

//Function that adds whatever button the user presses to the calculator screen
function addItem(button) {
    //Get the value of the button that was pushed
    let addVal = button.innerHTML;

    if (!isNaN(addVal)) {
        //If the button is a number, add to current input
        currentContent += addVal;
        resultEl.innerHTML = currentContent;
    } else if (addVal === "*" || addVal === "/" || addVal === "+" || addVal === "-") {
        //If the button is an operator, set it as current operator
        operator = addVal;
        currentContent += addVal;
        resultEl.innerHTML = currentContent;
    } else if (addVal === "=") {
        //If the button is "=" perform the calculation
        calculateResult();
    } else if (addVal === "C") {
        //If the button is "C", clear the current input and result
        currentContent = "";
        operator = "";
        result = null; //Reset the result to allow further calculations
        resultEl.innerHTML = "";
    } else {
        //If the button is not a number, operator, "=", "C", it's an additional operation
        if (result != null) {
            currentContent = result + addVal;
            resultEl.innerHTML = currentContent;
        }
    }
}

//Function to calculate result
function calculateResult() {
    //Split current input into operands based on the selected operator
    let operands = currentContent.split(new RegExp(`\\${operator}`));
    /*Example:
    let operands = "10+5".split(/[\+]/);
    Becomes an array like this => ["10", "5"]*/

    //Perform calculation based on the operator
    let result;
    switch (operator) {
        case "+":
            result = parseFloat(operands[0]) + parseFloat(operands[1]);
            break;
        case "-":
            result = parseFloat(operands[0]) - parseFloat(operands[1]);
            break;
        case "*":
            result = parseFloat(operands[0]) * parseFloat(operands[1]);
            break;
        case "/":
            result = parseFloat(operands[0]) / parseFloat(operands[1]);
            break;
        default:
            result = "Error";
    }

    //Display the result
    resultEl.innerHTML = result;

    //Reset the current input and operator for the next calculation
    currentContent = result.toString();
    operator = "";
}

//Add keydown event listener
document.addEventListener('keydown', function (event) {
    //Get the key that was pressed
    
})