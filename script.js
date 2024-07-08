//Main variables
let operator = '';
let currentVal = 0;
let previousVal = 0;
let numArray = [];
let result = '';

//Button variables
let clearBtn = document.getElementById('clearBtn');
let deleteBtn = document.getElementById('deleteBtn');
let equalsBtn = document.getElementById('equalsBtn');
let showPrev = document.querySelector('.showPrev');
let showNum = document.querySelector('.showNum');
let commaBtn = document.getElementById('commaBtn');

let numberBtns = document.querySelectorAll('.num');
let operatorBtns  = document.querySelectorAll('.oper');

commaBtn.addEventListener('click', function () {
    if (!numArray.includes('.')) {
        numArray.push('.')
    }
    showNum.textContent = numArray.join('');
});

numberBtns.forEach((num) => 
    num.addEventListener('click', function (e) {
        if (numArray.length < 9) {
            numArray.push(e.target.textContent);
            showNum.textContent = numArray.join('');
        }
    })
);

operatorBtns.forEach((op) => 
    op.addEventListener('click', function (e) {
        operator = e.target.textContent;
        setVal(numArray);
        startNextVal();
    }) 
);

clearBtn.addEventListener('click', clearCal);
deleteBtn.addEventListener('click', function () {
    numArray.pop();
    showNum.textContent = numArray.join('');
});

equalsBtn.addEventListener('click', function () {
    if (previousVal === 0) {
      showNum.textContent = currentVal;
    } else {
      setVal(numArray);
      result = calculate(previousVal, currentVal, operator);
      showNum.textContent = roundUp(result);
      showPrev.textContent = '';
    }
}); 

//Function that sets the current value
function setVal(array) {
    let newArray = array.join('');
    currentVal = newArray;   
    return currentVal;
}

//Function that moves current value into previous value + starts new current value
function startNextVal() {
    if (result !== '') {
      previousVal = roundUp(result);
    } else {
      previousVal = currentVal;
    }
    currentVal = 0;
    numArray = [];
    showNum.textContent = 0;
    showPrev.textContent = `${previousVal} ${operator}`;
};

//Round up the decimals
function roundUp(num) {
    return Math.round(num * 100) / 100;
};

//Calculator function
function calculate(a, b, op) {
    if(op === '+'){
        return a + b;
    }else if(op === '-'){
        return a - b;
    }else if(op === '×'){
        return a * b;
    }else if(op === '÷'){
        return a / b;
    }
};

//Clear everything
function clearCal() {
    operator = '';
    currentVal = 0;
    previousVal = 0;
    numArray = [];
    result = '';
    showNum.textContent = 0;
    showPrev.textContent = '';
};







