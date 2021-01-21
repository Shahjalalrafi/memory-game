document.addEventListener('DOMContentLoaded', () => {
    //cards
    const cards = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheese burger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'ice-creame',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milk-shake',
            img: 'images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },{
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheese burger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'ice-creame',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milk-shake',
            img: 'images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        }
    ]

    const chosedCard = []
    const choseId = []
    const cardsWon = []

    cards.sort(() => 0.5 - Math.random())
    console.log(cards)
    
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')

    function createBoard() {
        for(let i = 0; i < cards.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }
    createBoard()

    function flipcard() {
        let cardId = this.getAttribute('data-id')
        chosedCard.push(cards[cardId].name)
        choseId.push(cardId)
        this.setAttribute('src', cards[cardId].img)
        if(chosedCard.length == 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    function checkForMatch() {
        const img = document.querySelectorAll('img')
        const optionOneId = choseId[0]
        const optionTwoId = choseId[1]

        if(optionOneId == optionTwoId) {
            alert('you have choosed the same image')
            img[optionOneId].setAttribute('src', 'images/blank.png')
            img[optionTwoId].setAttribute('src', 'images/blank.png')
        }else if(chosedCard[0] == chosedCard[1]) {
            alert('you find the match image')
            img[optionOneId].setAttribute('src', 'images/white.png')
            img[optionTwoId].setAttribute('src', 'images/white.png')
            img[optionOneId].removeEventListener('click', flipcard)
            img[optionTwoId].removeEventListener('click', flipcard)
            cardsWon.push(chosedCard)
        }else {
            img[optionOneId].setAttribute('src', 'images/blank.png')
            img[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('sorry, please try again')
        }

        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cards.length/2) {
            resultDisplay.textContent = 'congratulation you won the match'
        } 
        console.log(chosedCard)
        console.log(cardsWon)
    }

})