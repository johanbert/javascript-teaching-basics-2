function getFirstValue() {
    return Number(document.getElementById('firstValue').value);
}

function getSecondValue() {
    return Number(document.getElementById('secondValue').value);
}

function add() {
    const firstValue = getFirstValue();
    const secondValue = getSecondValue();
    document.getElementById('result').value = firstValue + secondValue;
}

function subtract() {
    const firstValue = getFirstValue();
    const secondValue = getSecondValue();
    document.getElementById('result').value = firstValue - secondValue;
}

function multiply() {
    const firstValue = getFirstValue();
    const secondValue = getSecondValue();
    document.getElementById('result').value = firstValue * secondValue;
}

function divide() {
    const firstValue = getFirstValue();
    const secondValue = getSecondValue();
    document.getElementById('result').value = firstValue / secondValue;
}

function clearValues() {
    document.getElementById('firstValue').value = '';
    document.getElementById('secondValue').value = '';
    document.getElementById('result').value = '';
}

function alerta() {
    let resultPrompt;

    const firstValuePrompt = Number(prompt("Introduzca su numero:"));
    const secondValuePrompt = Number(prompt("Introduzca su segundo numero:"));
    const signPrompt = prompt("Introduzca signo");

    if (!Number.isFinite(firstValuePrompt) || !Number.isFinite(secondValuePrompt) || !['+', '-', '*', '/'].includes(signPrompt)) {
        alert('No son números, o no es un signo soportado');
        return;
    }

    if (signPrompt === '+') {
        resultPrompt = firstValuePrompt + secondValuePrompt;
    } else if (signPrompt === '-') {
        resultPrompt = firstValuePrompt - secondValuePrompt;
    } else if (signPrompt === '*') {
        resultPrompt = firstValuePrompt * secondValuePrompt;
    } else if (signPrompt === '/') {
        resultPrompt = firstValuePrompt / secondValuePrompt;
    }

    alert(resultPrompt);
}