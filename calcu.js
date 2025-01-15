let display = document.querySelector(".result");
let userInput = document.querySelector(".user-input"); 
let button = document.querySelectorAll(".operator");

let buttonArray = Array.from(button);
let string = ''; 
let lastResult = '';

buttonArray.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerHTML;

    if (value === 'DEL') {
    
      string = string.substring(0, string.length - 1);
      userInput.innerHTML = string; 
      display.value = string;

    } else if (value === 'AC') {
      
      string = '';
      lastResult = '';
      userInput.innerHTML = ''; 
      display.value = '';

    } else if (value === '=') {
      
      try {
        lastResult = eval(string); 
        if (lastResult === Infinity || lastResult === -Infinity) {
          lastResult = 'Error';
        }
        display.value = lastResult;
        userInput.innerHTML = string; 
      } catch (error) {
        lastResult = 'Error';
        display.value = lastResult;
        userInput.innerHTML = string; 
      }

    } else if (value === '%') {
      
      if (string) {
        const result = eval(string) / 100;
        string = result.toString();
        userInput.innerHTML = string; 
        display.value = string;
      }

    } else {
      
      string += value;
      userInput.innerHTML = string; 
      display.value = string;
    }
  });
});
