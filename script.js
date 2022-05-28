var titles = [
    "The 48 Laws of Power",
    "Start with Why",
    "The Art of War",
    "The Diary of a Young Girl"
];

const btnOriginal = document.getElementById('Original');
const btnAlphabetical = document.getElementById('Alphabetical');
const btnReverse = document.getElementById('Reverse');
const txtSorted = document.getElementById('show-text');

function originalOrder() {
    titles = [
        "The 48 Laws of Power",
        "Start with Why",
        "The Art of War",
        "The Diary of a Young Girl"
    ];
    txtSorted.innerHTML = titles;
}

function alphaOrder() {
    titles.sort();
    txtSorted.innerHTML = titles;
}

function reverseOrder() {
    titles.reverse();
    txtSorted.innerHTML = titles;
}

btnOriginal.addEventListener('click', originalOrder)
btnAlphabetical.addEventListener('click', alphaOrder)
btnReverse.addEventListener('click', reverseOrder)