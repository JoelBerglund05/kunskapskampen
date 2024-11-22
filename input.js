let inputNumber = 0;



const inputEl = document.getElementById('input');
const decreaseEl = document.getElementById('decrease');
const increaseEl = document.getElementById('increase');

inputNumber = Number(inputNumber);


decreaseEl.addEventListener('click', (decreaseEl) => {
    if (inputNumber <= 0) {
        inputNumber = inputNumber + 1;
    }
    inputNumber = inputEl.value;
    inputNumber = Number(inputNumber);
    inputNumber = inputNumber - 1;
    console.log(inputNumber);
    inputEl.value = inputNumber;
})


increaseEl.addEventListener('click', (increaseEl) => {
    inputNumber = inputEl.value;
    inputNumber = Number(inputNumber);
    inputNumber = inputNumber + 1;
    console.log(inputNumber);
    inputEl.value = inputNumber;
})