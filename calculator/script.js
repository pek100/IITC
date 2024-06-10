let display = document.querySelector('#display');
let body = document.querySelector('body');
const regex = /^[\d\+\-\*\/\%\^\(\)]+$/;

const appendValue = value => display.value += value;

body.addEventListener('keydown', (e) => {
    if (!regex.test(display.value)){display.value=''};
    e.code === 'Enter' || '=' ?(calculate()):(regex.test(e.key)?appendValue(e.key):null)
}
);
body.addEventListener('click', (event) => {
    if (!regex.test(display.value)){display.value=''};

    if (regex.test(event.target.getAttribute('data-operation'))) {
        appendValue(event.target.getAttribute('data-operation'));
    } else {
        switch (event.target.getAttribute('data-operation')) {
            case 'root':
                display.value = Math.sqrt(parseFloat(display.value));
                break;
            case 'factorial':
                const num = parseInt(display.value);
                if (isNaN(num) || num < 0) {
                    display.value = 'Error';
                } else if (num === 0) {
                    display.value = 1;
                } else {
                    let result = 1;
                    for (let i = 1; i <= num; i++) {
                        result *= i;
                    }
                    display.value = result;
                }
                break;
            case 'bin2dec':
                display.value = parseInt(display.value, 2);
                break;
            case 'dec2bin':
                display.value = parseInt(display.value).toString(2);
                break;
            case 'hex2dec':
                display.value = parseInt(display.value, 16);
                break;
            case 'dec2hex':
                display.value = parseInt(display.value).toString(16);
                break;
            case 'clearDisplay':
                display.value = '';
                break;
            case 'calculate':
                calculate();
                break;
        }
    }
});

const calculate = () => {
    if (regex.test(display.value)){
    try {display.value = eval(display.value)} catch (error) {display.value = 'Error'}
    }else{
    display.value = "Bad input";
}
};

