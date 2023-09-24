// to select and store a reference to elements in the HTML that match CSS selectors '.ans' and '.actions'
const ans = document.querySelector(".output");
const actions = document.querySelector(".buttons");

// variable declaration
let expression = "";

// event listener to perform required functions
actions.addEventListener("click", (e) => {
  console.log(e.target);
  const value = e.target.dataset["value"];

  console.log(value);
  if (value !== undefined) {
    if (value === "ce") {
      // 'ce' will reset the expression and display 0
      expression = "";
      ans.value = 0;
    } else if (value === "+") {
      expression = expression + value;
    } else if (value === "÷") {
      expression = expression / value;
    } else if (value === "=") {
      try {
        //if there is no error try is executed
        const answer = eval(expression); //using built-in eval function
        expression = answer.toString();
      } catch (error) {
        //agr evaluation me error iay ga
        expression = "Incorrect expression";
      }
    } else {
      expression += value;
    }
    ans.value = expression;
  }
});
