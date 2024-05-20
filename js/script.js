const buttonElement = document.querySelector('button');
const selectElement = document.getElementById('difficulty');

let caselle = '';

buttonElement.addEventListener('click', function () {
    if (selectElement.value === 'easy') {
        caselle = 100
        createGrid(caselle, 'big')
    }
    else if (selectElement.value === 'medium') {
        caselle = 81;
        createGrid(caselle, 'medium');
    }
    else if (selectElement.value === 'hard') {
        caselle = 49;
        createGrid(caselle, 'small')}
});


function createGrid(slot, size) {
    const gridElement = document.getElementById('grid');
    gridElement.innerHTML = '';

    for (let i = 0; i < slot; i++) {
        const articleElement = document.createElement('article');
        articleElement.classList.add(size);
        gridElement.appendChild(articleElement);
        const spanElement = document.createElement('span');
        articleElement.appendChild(spanElement);
        spanElement.append(i + 1);

        articleElement.addEventListener('click', function () {
            articleElement.classList.add('active');
            console.log(spanElement.innerText);
        });
    }
};