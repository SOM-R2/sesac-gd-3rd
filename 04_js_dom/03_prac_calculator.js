const value1Input = document.getElementById('value1');
const value2Input = document.getElementById('value2');
const operatorInput = document.getElementById('operator');
const resultInput = document.getElementById('result');
const submitBtn = document.getElementById('sumbit');
const resetBtn = document.getElementById('reset');

submitBtn.addEventListener('click', () => {
    const value1 = Number(value1Input.value);
    const value2 = Number(value2Input.value);
    const operator = operatorInput.value;
    resultInput.disabled = false;

    if (value1 == '' || value2 == '' || operator == '') {
        alert('값을 입력하세요.');
        resultInput.disabled = true;
    } else {
        if (!isNaN(value1) && !isNaN(value2)) {
            if (operator === '+') {
                let result = value1 + value2;
                return (resultInput.value = result);
            } else if (operator === '-') {
                result = value1 - value2;
                return (resultInput.value = result);
            } else if (operator === '/') {
                result = value1 / value2;
                return (resultInput.value = result);
            } else if (operator === '*') {
                result = value1 * value2;
                return (resultInput.value = result);
            } else {
                alert('연산자는 +,-,/,* 만 입력해주세요.');
                value1Input.value = '';
                value2Input.value = '';
                operatorInput.value = '';
                resultInput.value = '';
                resultInput.disabled = true;
            }
        } else {
            alert('값은 숫자만 입력해주세요.');
            value1Input.value = '';
            value2Input.value = '';
            operatorInput.value = '';
            resultInput.value = '';
            resultInput.disabled = true;
        }
    }
});

resetBtn.addEventListener('click', () => {
    value1Input.value = '';
    value2Input.value = '';
    operatorInput.value = '';
    resultInput.value = '';
    resultInput.disabled = true;
});
