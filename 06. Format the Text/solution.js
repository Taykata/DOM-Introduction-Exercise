function solve() {
    let inputText = document.getElementById('input').value;
    let sentences = inputText.split('.').filter(sentence => sentence.trim().length > 0);

    let paragraphs = [];

    for (let i = 0; i < sentences.length; i += 3) {
        let paragraphText = sentences.slice(i, i + 3).join('. ');
        let paragraph = `<p>${paragraphText}.</p>`;
        paragraphs.push(paragraph);
    }

    document.getElementById('output').innerHTML = paragraphs.join('');
}