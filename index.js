// catch required ui elements
let catchUiElements = (element) => {
  return document.querySelector(element);
};

// input fields
let input1 = catchUiElements("#input1");
let input2 = catchUiElements("#input2");

// convert input value from string to number
const convertInput = (num1, num2) => {
  if (input1.value == "" && input2.value == "") {
    alert("Enter Two Numbers");
  } else {
    let number1 = Number(num1.value);
    let number2 = Number(num2.value);
    return {
      number1: number1,
      number2: number2,
    };
  }
};

// buttons
let addBtn = catchUiElements(".addBtn");
let minusBtn = catchUiElements(".minusBtn");
let productBtn = catchUiElements(".productBtn");
let divisionBtn = catchUiElements(".divisionBtn");
let output = catchUiElements(".output");

// mathematical operation
let mathOperation = (number1, operator, number2) => {
  if (operator == "+") {
    return number1 + number2;
  } else if (operator == "-") {
    return number1 - number2;
  } else if (operator == "*") {
    return number1 * number2;
  } else {
    return number1 / number2;
  }
};

// show output
const showOutput = (result) => {
  return (output.innerText = `Result: ${result}`);
};

// operation by click
addBtn.addEventListener("click", () => {
  let add = mathOperation(
    convertInput(input1, input2).number1,
    "+",
    convertInput(input1, input2).number2
  );
  showOutput(add);
});

minusBtn.addEventListener("click", () => {
  let minus = mathOperation(
    convertInput(input1, input2).number1,
    "-",
    convertInput(input1, input2).number2
  );
  showOutput(minus);
});

productBtn.addEventListener("click", () => {
  let product = mathOperation(
    convertInput(input1, input2).number1,
    "*",
    convertInput(input1, input2).number2
  );
  showOutput(product.toFixed(2));
});

divisionBtn.addEventListener("click", () => {
  let division = mathOperation(
    convertInput(input1, input2).number1,
    "/",
    convertInput(input1, input2).number2
  );
  showOutput(division.toFixed(2));
});
