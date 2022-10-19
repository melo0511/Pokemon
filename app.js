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

const card = document.createElement('div')
card.classList.add('card')

const imagePokemon =document.createElement('img')
imagePokemon.setAttribute('src',data.sprites.front_default)

const namePokemon = document.createElement('h1')
namePokemon.textContent = data.name

containerCards.appendChild(card)

card.appendChild(namePokemon)
card.appendChild(imagePokemon)

}

