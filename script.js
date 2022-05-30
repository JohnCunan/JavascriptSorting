var titles = [
    "The 48 Laws of Power",
    "Heart of Darkness",
    "The Man in the High Castle",
    "House of Cards"
];

const btnOriginal = document.getElementById('Original');
const btnAlphabetical = document.getElementById('Alphabetical');
const btnReverse = document.getElementById('Reverse');
const txtSorted = document.getElementById('show-text');

function originalOrder() {
    titles = [
        "The 48 Laws of Power",
        "Heart of Darkness",
        "The Man In the High Castle",
        "House of Cards"
    ];
    txtSorted.innerHTML = titles;
}

function alphaOrder() {
    titles = [
        "The 48 Laws of Power",
        "Heart of Darkness",
        "The Man In the High Castle",
        "House of Cards"
    ];
    titles.sort();
    txtSorted.innerHTML = titles;
}

function reverseOrder() {
    titles = [
        "The 48 Laws of Power",
        "Heart of Darkness",
        "The Man In the High Castle",
        "House of Cards"
    ];
    titles.reverse();
    txtSorted.innerHTML = titles;
}

btnOriginal.addEventListener('click', originalOrder)
btnAlphabetical.addEventListener('click', alphaOrder)
btnReverse.addEventListener('click', reverseOrder)