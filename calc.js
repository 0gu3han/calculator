var result = document.getElementById('result');
var number1 = null;
var number2 = null;
var operation = null;
result.textContent = 0;

function number(n) {
    if (number1 == null && number2 == null && operation == null) {
        result.textContent = n;
        number1 = parseFloat(result.textContent);

    } else if (number1 != null && number2 == null && operation == null) {
        result.textContent += n;
        number1 = parseFloat(result.textContent);

    } else if (number1 != null && number2 == null && operation != null) {
        result.textContent = n;
        number2 = parseFloat(result.textContent);

    } else if (number1 != null && number2 != null && operation != null) {
        result.textContent += n;
        number2 = parseFloat(result.textContent);

    }

    console.log(number1, number2, operation);
}

function operator(o) {
    if (number1 == null && operation == null) {
        number1 = 0;
        operation = o;

    } else if (number1 != null && operation == null) {
        operation = o;

    } else if (number1 != null && operation == '*') {
        number1 *= number2;

    } else if (number1 != null && operation == '/') {
        number1 /= number2;

    } else if (number1 != null && operation == '+') {
        number1 += number2;

    } else if (number1 != null && operation == '-') {
        number1 -= number2;
    }
    else if (number1 != null && operation == '%') {
        if (number2 !== 0) {
            number1 = number1 % number2;
        }
    }
    number2 = null;
    operation = o;

    // console.log(number1, number2, operation);
}

function point() {
    if (!result.textContent.includes('.')) {
        result.textContent += ".";
        number1 = parseFloat(result.textContent);
    }
}

function equal() {
    if (number1 != null && number2 != null && operation != null) {
        if (operation == '*') {
            number1 *= number2;
        } else if (operation == '/') {
            number1 /= number2;
        } else if (operation == '+') {
            number1 += number2;
        } else if (operation == '-') {
            number1 -= number2;
        } else if (operation == '%') {
            number1 %= number2;
        }
        
        number2 = null;
        operation = null;
        result.textContent = number1;
    }

    console.log(number1, number2, operation);
}

function change_sign() {
    // Check which number to negate
    if (number2 !== null) {
        number2 = -number2;
        result.textContent = number2;
    } else if (number1 !== null) {
        number1 = -number1;
        result.textContent = number1;
    } else {
        result.textContent = "0";
    }
    console.log("Negated value:", number1, number2);
}

function reset() {
    number1 = null;
    number2 = null;
    operation = null;
    result.textContent = 0;
}