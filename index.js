//getting references
const inputEl = document.querySelector('#input');
const outputEl = document.querySelector('#output');
const buttonEl = document.querySelector('#btn');
const clearButtonEl = document.querySelector('#btn-clear')

function constructURL (input) {
    return `https://api.funtranslations.com/translate/minion.json?text=${input}` 
}

function clickHandler() {
    fetch(constructURL(inputEl.value)).then(response => response.json()).then(json => {
        outputEl.value = json.contents.translated;
    }).catch(err=> alert(`something wrong with server, we have an error.${err}`));
}

function clearHandler() {
    inputEl.value = '';
}

//adding event listeners to buttons
buttonEl.addEventListener('click', clickHandler);
clearButtonEl.addEventListener('click', clearHandler);