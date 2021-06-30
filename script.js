VanillaTilt.init(document.querySelector(".container"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.5
});

function equalButton(){
  historyValue = document.querySelector('#history-value');
  currentValue = document.calc.txt.value;


  document.calc.txt.value = eval(calc.txt.value);
  historyValue.innerText = currentValue;
}

function clearDisplay(){
  calc.txt.value = '';
  historyValue.innerText = '';
}
