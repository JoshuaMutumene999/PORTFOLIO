let currentInput = "";
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const toggleButton = document.getElementById('toggle-calculator');
const calculator = document.getElementById('calculator');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (value === '=') {
            try {
                console.log("Input: " + currentInput);
                currentInput = eval(currentInput);
                display.value = currentInput;
            } catch (error) {
                display.value = "Error";
            }
        } else {
            currentInput += value;
            console.log("Input: " + currentInput);
            //   display.innerText = currentInput;
            display.value = currentInput;
        }
    });
});

const clearButton = document.getElementById('clear')
clearButton.addEventListener('click', () => {
    currentInput = "";
    display.value = ""
});

const primeButton = document.getElementById('prime')
primeButton.addEventListener('click', () => {
    const number = parseInt(currentInput, 10);

    if (isNaN(number)) {
        display.value = "Please enter a valid number";
        return;
    }

    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    display.value = isPrime(number)
        ? `${number} is a prime number`
        : `${number} is not a prime number`;

    primeResult.textContent = isPrime(number)
        ? `${number} is a prime number`
        : `${number} is not a prime number`;


    // Toggle visibility
    primeTab.classList.toggle('hidden');
});

toggleButton.addEventListener('click', () => {
    calculator.classList.toggle('hidden');
    currentInput = "";
    display.value = ""
});
