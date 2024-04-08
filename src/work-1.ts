function performOperation(operation: string): void {
    const num1Input = document.getElementById('num1')
    const num2Input = document.getElementById('num2')
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);

    let result: number;

    switch (operation) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
        default:
            result = NaN;
            break;
    }

    const resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.textContent = `Result: ${result}`;
    }
}

function add(a, b): {
    return a + b;
}

function subtract(a, b): {
    return a - b;
}

function multiply(a, b): {
    return a * b;
}

function divide(a, b): {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

