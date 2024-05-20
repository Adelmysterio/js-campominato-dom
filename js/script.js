const buttonElement = document.querySelector('button');
const selectElement = document.getElementById('difficulty');

let caselle = '';

buttonElement.addEventListener('click', function () {
    if (selectElement.value === 'easy') {
        caselle = 100
        createGame(caselle, 'big')
    }
    else if (selectElement.value === 'medium') {
        caselle = 81;
        createGame(caselle, 'medium');
    }
    else if (selectElement.value === 'hard') {
        caselle = 49;
        createGame(caselle, 'small')
    }
});


function createGame(slot, size) {
    const gridElement = document.getElementById('grid');
    const scoreElement = document.getElementById('score')
    let bombs = [];
    let score = 0;
    gridElement.innerHTML = '';
    scoreElement.innerHTML = '';

    while (bombs.length != 16) {

        const bombSlot = getRandomInt(1, slot)

        if (!bombs.includes(bombSlot)) {
            bombs.push(bombSlot)
        }
    }


    for (let i = 0; i < slot; i++) {
        const articleElement = document.createElement('article');
        articleElement.classList.add(size);
        gridElement.appendChild(articleElement);
        const spanElement = document.createElement('span');
        articleElement.appendChild(spanElement);
        spanElement.append(i + 1);



        articleElement.addEventListener('click', function () {
            if (bombs.includes(parseInt(spanElement.innerText))) {
                articleElement.classList.add('bomb');
                this.removeEventListener
            }
            else {
                articleElement.classList.add('active');
                score += 1
                scoreElement.innerHTML = score

            }
        });
    }
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


