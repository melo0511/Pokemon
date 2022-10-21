window.addEventListener('DOMContentLoaded',consumoApi)

const containerCards = document.querySelector('.containerCards')

function consumoApi(){
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response=>response.json())
    .then(response=>response.results.map(element=>{
        consumirPokemon(element)
    }))
}

function consumirPokemon(element){

    let newUrl = element.url

    fetch(newUrl)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        createCards(data)
    })
}

function createCards(data){

    console.log(data);

const principal = document.createElement('div')
principal.classList.add('principal')

const card = document.createElement('div')
card.classList.add('card')

const containerImg = document.createElement('div')
containerImg.classList.add('block')

const containerImg2 = document.createElement('div')
containerImg2.classList.add('CircleImg')
containerImg2.classList.add('effect')
containerImg2.classList.add('AnimationSpin')

const imagePokemon =document.createElement('img')
imagePokemon.setAttribute('src',data.sprites.front_default)
imagePokemon.classList.add('img')

const namePokemon = document.createElement('h1')
namePokemon.textContent = data.name

containerCards.appendChild(principal)

principal.appendChild(card)

card.appendChild(namePokemon)
card.appendChild(containerImg)
containerImg.appendChild(containerImg2)
containerImg2.appendChild(imagePokemon)

}

