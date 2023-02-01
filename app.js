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
const cardsChosen = []
const cardsChosenIds = []

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
    console.log(cards)
    console.log('check for match!')

    //get both items in chosen card array and see if they match
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match')
        cards[cardsChosenIds[0]].setAttribute('src', 'images/plain.jpg')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/plain.jpg')
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard)

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











