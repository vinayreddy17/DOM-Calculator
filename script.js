// created various dom elements according to usage
const resultInput = document.getElementById('result');
const operatorButtons = document.querySelectorAll('.operator');
const numberButtons = document.querySelectorAll('.number');
const equalsButton = document.getElementById('equal');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete')
const clear=document.getElementById('equal')




// for every button we click on the calculator a event listener is added
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        resultInput.value += button.innerText;
    console.log(resultInput.value);
    });
});


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        resultInput.value += button.innerText;
        console.log(resultInput.value);
    });
});

equalsButton.addEventListener('click', () => {
    try {
        const result = eval(resultInput.value);
        resultInput.value = result;
        console.log(resultInput.value);
    } catch (error) {
        alert('Invalid expression');
    }
});


clearButton.addEventListener('click', () => {
    resultInput.value = '';
    console.log(resultInput.value);
});

deleteButton.addEventListener('click', () => {
    resultInput.value = resultInput.value.slice(0, -1);
    console.log(resultInput.value);
});
