//novice calculator

//Declare variables..

const num1 = document.querySelector('#num1');
const op = document.querySelector('#op');
const num2 = document.querySelector('#num2');
const submit = document.querySelector('#submit');
const ans = document.querySelector('#ans');
const remove = document.querySelector('#remove');

//Create the control flow
function add(digit1, digit2) {
    
    if(op.value === '+') {
        return digit1 + digit2;
    }else if(op.value === '-') {
        return digit1 - digit2;
    }else if(op.value === '/') {
        return digit1 / digit2;
    }else if(op.value === '*') {
        return digit1 * digit2;
    }else {
        console.log('Invalid Choice');
    }

}

//Button to execute..
submit.addEventListener('click', function(){
    ans.innerText = add(parseFloat(num1.value), parseFloat(num2.value));
});

remove.addEventListener('click', function() {
    ans.innerText = '';
});