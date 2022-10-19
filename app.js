window.addEventListener('DOMContentLoaded',consumoApi)

function consumoApi(){
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response=>response.json())
    .then(response=>response.results.map(element=>{
        createCards(element)
    }))
}

function consumirPokemon(newUrl){
    fetch(newUrl)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
    })
}

const containerCards = document.querySelector('.containerCards')

function createCards(pokemon){

const {name,url} = pokemon

const card = document.createElement('div')
card.setAttribute('alt',name)
card.classList.add('card')


const namePokemon = document.createElement('h1')
namePokemon.textContent = name

containerCards.appendChild(card)

card.appendChild(namePokemon)

consumirPokemon(url)

}

