let display = document.querySelector('#display');
const regex = /^[\d+\-*/%^()÷\b\(.)\(!)\(√)]+$/;
const sqrtRegex = /√(\d+(\.\d+)?)/g;
const factorialRegex = /(\d+(\.\d+)?)!/g;
const percentageRegex = /(\d+(\.\d+)?)%(\d+(\.\d+)?)/g;

const isValidInput = value => regex.test(value);
const appendValue = value => {display.value += value;}

const onKeydown = e => {
    input();
  if (e.code === 'Backspace') display.value = display.value.slice(0, -1);
  else if (isValidInput(e.key)) {
    (e.code === 'Enter' || e.code === '=' || e.code === 'Space') ? calculate(display.value) : appendValue(e.key);
  }}

  const onClick = target => {    
    input();
    if (!isValidInput(display.value) || clear) display.value = '';
    clear = false;
    if (isValidInput(target.innerHTML)) {
        appendValue(target.innerHTML);
    } else {
      success();
        const handlers = {
            'BinToDec': () => parseInt(display.value, 2),
            'DecToBin': () => parseInt(display.value).toString(2),
            'HexToDec': () => parseInt(display.value, 16),
            'DecToHex': () => parseInt(display.value).toString(16),
            'C': () => {display.value = ''; display.style.backgroundColor="#282a32";},
            '=': calculate(display.value)
        };
        const result = handlers[target.innerHTML]();
        if (result !== undefined) display.value = result;
    }
}

  const error = (isbad) => { display.style.backgroundColor = "rgb(97, 0, 0)";;
    display.value = isbad==0?'Bad Input':'Error';}

  const success = () => {
    display.style.backgroundColor="rgb(62, 104, 0)";}

  const input = () => {
    display.style.backgroundColor="#282a3a";
  }


  const onFactorial = (value) => {
    if (isNaN(value) || value < 0) {
      error();
      
    } else if (value === 0) {
      return 1;
    } else {
      let result = 1;
      for (let i = 1; i <= value; i++) {
        result *= i;
      }
      return result;
    }}
    const calculate = (value) => {
      if (value.includes("-") || value.includes("+") ||
          value.includes("÷") || value.includes("*") ||
          value.includes("^") || value.includes("%") ||
          value.includes("/") || value.includes("√") ||
          value.includes("!")) {
        if (isValidInput(display.value)) {
          try {
            let result = value;
            // Handle square roots
            result = result.replace(sqrtRegex, (match, number) => Math.sqrt(parseFloat(number)));
            // Handle factorials
            result = result.replace(factorialRegex, (match, number) => onFactorial(parseFloat(number)));
            // Handle percentages
            result = result.replace(percentageRegex, (match, percentage, _, number) => (parseFloat(number) * parseFloat(percentage) / 100));  
            // Replace special characters
            result = result.replace(/÷/g, "/");
            result = result.replace(/\^/g, "**");
    
            // Evaluate the expression
            display.value = eval(result);
          } catch {
            error(0);
          }
        } else {
          error();
        }
      }
    }
document.body.addEventListener('keydown', onKeydown);
document.body.addEventListener('click', e => e.target.matches('button') && onClick(e.target));