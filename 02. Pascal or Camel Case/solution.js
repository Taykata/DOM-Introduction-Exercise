function solve() {
    let text = document.getElementById('text').value;
    let convention = document.getElementById('naming-convention').value;
    let result = document.getElementById('result');

    if (convention === 'Camel Case') {
        result.textContent = camelCase(text);
    } else if (convention === 'Pascal Case') {
        result.textContent = pascalCase(text);
    } else {
        result.textContent = 'Error!';
    }

    function camelCase(text) {
        text = text.toLowerCase();
        let textAsArr = text.split('');

        for (let i = 0; i < textAsArr.length; i++) {
            if (textAsArr[i] === ' ') {
                let letter = textAsArr[i + 1].toUpperCase();
                textAsArr.splice(i, 2, letter);
            }
        }
        text = textAsArr.join('');
        return text;
    }

    function pascalCase(text) {
        text = camelCase(text);
        let textAsArr = text.split('');
        let firstLetter = textAsArr.shift();
        let bifLetter = firstLetter.toUpperCase();
        textAsArr.splice(0, 0, bifLetter);
        text = textAsArr.join('');
        return text;
    }
}