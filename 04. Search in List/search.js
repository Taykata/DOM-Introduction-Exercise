function search() {
    let towns = document.getElementsByTagName('li');
    let text = document.getElementById('searchText');
    let result = document.getElementById('result');
    let counter = 0;

    for (let town of towns) {
        if (town.textContent.includes(text.value)) {
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
            counter++;
        }
    }

    result.textContent = `${counter} matches found`;
}