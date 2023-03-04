let buts = document.querySelectorAll(".num-button");
let allButs = document.querySelectorAll(".button");
let outcome = document.querySelector("#display");
let clearBut = document.querySelector('#clear');
let sum = document.querySelector("#total");
let butSpread = [...buts];
let allButSpread = [...allButs];

// Number input on click
butSpread.forEach((button, i) => {
    button.addEventListener("click", () => {
  
      if (outcome.innerHTML == "0") {
        outcome.innerHTML = "";
    }
      let value = buts[i].innerHTML;
      outcome.innerHTML += value;
    });
});

// Clear Screen
clearBut.addEventListener('click', ()=> {
    outcome.innerHTML = "0";
})


function evaluate(fn) {
    return new Function('return ' + fn)();
}

// Summation Proper
sum.addEventListener('click', ()=> {
    let allInputs = outcome.innerHTML;
    
    outcome.innerHTML = evaluate(allInputs);
    
    console.log(evaluate(allInputs));
    })