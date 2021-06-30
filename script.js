VanillaTilt.init(document.querySelector(".container"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.5
});

function equalButton(){
  const historyValue = document.querySelector('#history-value');
  const currentValue = document.calc.txt.value;
  
  document.calc.txt.value = eval(calc.txt.value);
  historyValue.innerText = currentValue;
}

function clearDisplay(){
  calc.txt.value = '';

  const historyValue = document.querySelector('#history-value');
  historyValue.innerText = '';
}
