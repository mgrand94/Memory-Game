const cardArray = [
    {
        name: 'tesla',
        img: 'images/tesla.jpg',
    },
    {
        name: 'ford',
        img: "images/ford.jpg",
    }
    ,
    {
        name: 'jeep',
        img: "images/jeep.jpg",
    }
    ,
    {
        name: 'porsche',
        img: "images/porsche.jpg",
    },
    {
        name: 'toyota',
        img: "images/toyota.jpg",
    },
    {
        name: 'tesla',
        img: 'images/tesla.jpg',
    },
    {
        name: 'ford',
        img: "images/ford.jpg",
    }
    ,
    {
        name: 'jeep',
        img: "images/jeep.jpg",
    }
    ,
    {
        name: 'porsche',
        img: "images/porsche.jpg",
    },
    {
        name: 'toyota',
        img: 'images/toyota.jpg',
    }
    ,
    {
        name: 'benz',
        img: 'images/benz.jpg',
    }
    ,
    {
        name: 'benz',
        img: 'images/benz.jpg',
    }
]

//shuffling array randomly
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard () {
    for (let i = 0; i < cardArray.length ; i++) {
        //create card
        const card = document.createElement('img')

        //assigns image
        card.setAttribute('src', 'images/graphics.jpg')

        //sets id for each card
        card.setAttribute('data-id', i)

        //when clicked
        card.addEventListener('click', flipCard)
        
        // adds cards to grid
        gridDisplay.append(card)
    }
}

createBoard();


function checkMatch () {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds [0]
    const optionTwoId = cardsChosenIds [1]
    console.log(cards)
    console.log('check for match!')

    if(optionOneId == optionTwoId) {
        alert("You clicked the same image!")
        cards[optionOneId].setAttribute('src', 'images/plain.jpg')
        cards[optionTwoId].setAttribute('src', 'images/plain.jpg')
    }

    //get both items in chosen card array and see if they match
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match')
        //turns cards plain
        cards[optionOneId].setAttribute('src', 'images/plain.jpg')
        cards[optionTwoId].setAttribute('src', 'images/plain.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        //push card similar to cardsWon array
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/graphics.jpg')
        cards[optionTwoId].setAttribute('src', 'images/graphics.jpg')
        alert("Sorry try again!")
    }
    //restarts process
    resultDisplay.innerHTML = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.innerHTML = "Congratulations you find all them all!"
    }
}

function flipCard() {
    //lets us interact with card we clicked and getting id
    const cardId = this.getAttribute('data-id')

    //pushing id into new array
    cardsChosen.push(cardArray[cardId].name)

    cardsChosenIds.push(cardId)

    //sets image when flipped
    this.setAttribute('src', cardArray[cardId].img)

    //once new array has 2 cards, see if they match
    if(cardsChosen.length === 2) {
        setTimeout(checkMatch, 50)
    }
}











