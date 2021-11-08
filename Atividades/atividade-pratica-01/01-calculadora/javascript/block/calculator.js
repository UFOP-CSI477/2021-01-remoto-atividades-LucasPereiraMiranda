let total = 0;
let buffer = "0";
let lastOperator = null;

const calculatorsScreen = document.querySelector('.calculator-screen');

const init = () =>{
  document.querySelector('.calculator-buttons').addEventListener('click',function(e){
    buttonClick(e.target.innerText);
  });
}

const buttonClick = (value) => {
  let intValue = parseInt(value)
  if(isNaN(intValue)){
    manipulateSymbol(value)
  }
  else{
    manipulateNumber(value)
  }
  render();
}

const manipulateNumber = (number) => {
  if(buffer === '0'){
    buffer = number;
  }
  else{
    buffer += number;
  }
}

const manipulateSymbol = (symbol)=> {
  if(symbol == 'AC'){
    buffer="0";
    total=0;
    lastOperator = null;
  }
  else if(symbol == '='){
    if(lastOperator === null){
      return;
    }
    flushScreenOperation(parseInt(buffer));
    lastOperator = null;
    buffer = "" + total;
    total = 0;
  }
  else if(symbol == '←'){
    if(buffer.length == 1){
      buffer = "0";
    }
    else{
      buffer = buffer.substring(0,buffer.length - 1);
    }
  }
  else{
    manipulateMath(symbol);
  }
}

const manipulateMath = (number) => {
  const intBuffer = parseInt(buffer);
  if(total == 0){
    total = intBuffer;
  }
  else{
    flushScreenOperation(intBuffer);
  }
  lastOperator = number;
  buffer = '0';
}

const flushScreenOperation = (intBuffer) => {
  if(lastOperator === "+"){
    total += intBuffer;
  }
  else if(lastOperator === "-"){
    total -= intBuffer;
  }
  else if(lastOperator === "x"){
    total *= intBuffer;
  }else{
    total /= intBuffer
  }
}

const render = () => {
  calculatorsScreen.innerText = buffer;
}

init();