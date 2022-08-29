let level = document.querySelectorAll('.level');
let levels = document.querySelector('.levels');
let firstCard = document.querySelector('.first-card');
let secondCard = document.querySelector('.second-card');
let thirdCard = document.querySelector('.third-card');
let fouthCard = document.querySelector('.fourth-card');

let mix = document.querySelector('.mix');

let veryLight = document.querySelector('.very-light');
let light = document.querySelector('.light');
let medium = document.querySelector('.medium');
let high = document.querySelector('.high');
let veryHigh = document.querySelector('.very-high');

veryLight.addEventListener('click', veryLightLevel);
light.addEventListener('click', lightLevel);
medium.addEventListener('click', mediumLevel);
high.addEventListener('click', highLevel);
veryHigh.addEventListener('click', veryHighLevel);

let firstVeryEasyLevel = [];
let secondVeryEasyLevel = [];
let thirdVeryEasyLevel = [];

let blueRandomCardsForGame = [];
let brownRandomCardsForGame = [];
let greenRandomCardsForGame = [];

let verEasy = []

console.log('levels', levels)
level.forEach((item) => {
    item.addEventListener('click', closeButtoms);
})

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

firstCard.addEventListener('click', firstGame);
secondCard.addEventListener('click', secondGame);
thirdCard.addEventListener('click', thirdGame);
fouthCard.addEventListener('click', fouthGame);


let blueCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let brownCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
let greenCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

let blueRandomCards = blueCards.sort(() => Math.random() - 0.5);
let brownRandomCards = brownCards.sort(() => Math.random() - 0.5);
let greenRandomCards = greenCards.sort(() => Math.random() - 0.5);

function firstGame() {
    blueRandomCardsForGame = blueRandomCards.slice(0, 2);
    brownRandomCardsForGame = brownRandomCards.slice(0, 9);
    greenRandomCardsForGame = greenRandomCards.slice(0, 5);

    console.log('blue', blueRandomCardsForGame, 'brown', brownRandomCardsForGame, 'green', greenRandomCardsForGame)
    openButtoms();
}


function secondGame() {
    blueRandomCardsForGame = blueRandomCards.slice(0, 2);
    brownRandomCardsForGame = brownRandomCards.slice(0, 9);
    greenRandomCardsForGame = greenRandomCards.slice(0, 4);
    console.log('blue', blueRandomCardsForGame, 'brown', brownRandomCardsForGame, 'green', greenRandomCardsForGame)

    openButtoms();
}

function thirdGame() {
    blueRandomCardsForGame = blueRandomCards.slice(0, 2);
    brownRandomCardsForGame = brownRandomCards.slice(0, 9);
    greenRandomCardsForGame = greenRandomCards.slice(0, 5);
    console.log('blue', blueRandomCardsForGame, 'brown', brownRandomCardsForGame, 'green', greenRandomCardsForGame)

    openButtoms();
}

function fouthGame() {
    blueRandomCardsForGame = blueRandomCards.slice(0, 2);
    brownRandomCardsForGame = brownRandomCards.slice(0, 8);
    greenRandomCardsForGame = greenRandomCards.slice(0, 6);
    console.log('blue', blueRandomCardsForGame, 'brown', brownRandomCardsForGame, 'green', greenRandomCardsForGame)

    openButtoms();
}

function openButtoms() {
    levels.classList.add('active');
}

function closeButtoms() {
    levels.classList.remove('active');
}


function pusher(where, what, count, color) {
    what.forEach((item, index) => {
        if (index < count) where.push({
            color: color,
            card: item
        })
    })
}

function veryLightLevel() {
    closeButtoms();
    const cardBlue = shuffle([3, 4, 5, 10])

    pusher(verEasy, cardBlue, 2, 'blue')

    const cardBrown = shuffle([11, 12, 13, 14, 21])
    const cardBrownNormal = shuffle([1, 2, 3, 4, 5, 15, 16, 17, 18, 19, 20])

    pusher(verEasy, cardBrown, 5, 'brown')
    pusher(verEasy, cardBrownNormal, 4, 'brown')

    const cardGreen = shuffle([1, 12, 16, 17, 18])

    pusher(verEasy, cardGreen, 5, 'green')

    console.log('голубые карты в начале', verEasy)


    firstVeryEasyLevel.push(verEasy[0]);
    firstVeryEasyLevel.push(verEasy[2]);
    firstVeryEasyLevel.push(verEasy[3]);
    firstVeryEasyLevel.push(verEasy[11]);

    secondVeryEasyLevel.push(verEasy[1]);
    secondVeryEasyLevel.push(verEasy[4]);
    secondVeryEasyLevel.push(verEasy[5]);
    secondVeryEasyLevel.push(verEasy[6]);
    secondVeryEasyLevel.push(verEasy[12]);
    secondVeryEasyLevel.push(verEasy[13]);

    thirdVeryEasyLevel.push(verEasy[7]);
    thirdVeryEasyLevel.push(verEasy[8]);
    thirdVeryEasyLevel.push(verEasy[9]);
    thirdVeryEasyLevel.push(verEasy[10]);
    thirdVeryEasyLevel.push(verEasy[14]);
    thirdVeryEasyLevel.push(verEasy[15]);

    console.log('AAAAAAAAAAAAAAA', verEasy[0]);


    console.log('первый уровень', firstVeryEasyLevel);
    console.log('второй уровень', secondVeryEasyLevel);
    console.log('тртий уровень', thirdVeryEasyLevel);

    mix.addEventListener('click', showCards)
}

function showCards() {
    mix.classList.remove('delete')
    console.log('кнооооооооооооопка')
}


function lightLevel() {
    closeButtoms();

};

function mediumLevel() {
    closeButtoms();

};

function highLevel() {
    closeButtoms();

};

function veryHighLevel() {
    closeButtoms();

};

// проверять, какой уровень выбрали. если первый, то чистим массив нужных карт. и через иф, если карт не хватает, добираем коричневых. 
// В следующих уровнях просто убираем карты, а в среднем вообще оставляем нетронутой колоду. 
// в конце каждой такой проверки ещё и вызываем функцию стартГейм. 
//  тут уже при кликах уменьшаем количество карт. + карты должны выбираться рандомно, т.е. как-то надо на каждом этапе перемешать, но с сохранением знания. какую карту выбрали