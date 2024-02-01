function subtract() {
    const firstNum = document.getElementById('firstNumber').value;
    const secondNum = document.getElementById('secondNumber').value;
    const subtract = Number(firstNum) - Number(secondNum);
    
    const result = document.getElementById('result');
    result.textContent = subtract;
}