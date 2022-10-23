window.addEventListener('DOMContentLoaded',consumoApi)

const containerCards = document.querySelector('.containerCards')

// Consumir pokemones

function consumoApi(){
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response=>response.json())
    .then(response=>response.results.map(element=>{
        consumirPokemon(element)
    }))
}

// Consumir las caracteristicas de los pokemones

function consumirPokemon(element){

    let newUrl = element.url

    fetch(newUrl)
    .then(response=>response.json())
    .then(data=>{
        // console.log(data);
        createCards(data)
    })
}

const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
}

// Renderizar pokemones

function createCards(data){

// console.log(data);

const card= document.createElement('div')
card.classList.add('card')

const rotomDex = document.createElement('div')
rotomDex.classList.add('rotomDex')

const firstView = document.createElement('div')
firstView.classList.add('firstView')

const containerImg = document.createElement('div')
containerImg.classList.add('containerImg')

const imagePokemon =document.createElement('img')
imagePokemon.setAttribute('src',data.sprites.front_default)
imagePokemon.classList.add('img')

const namePokemon = document.createElement('h1')
namePokemon.textContent = data.name

const idPokemon = document.createElement('h3')
idPokemon.textContent = "N° "+ data.id

const features = document.createElement('div')
features.classList.add('features')

containerCards.appendChild(card)

card.appendChild(rotomDex)
card.appendChild(firstView)
firstView.appendChild(namePokemon)
firstView.appendChild(containerImg)
containerImg.appendChild(imagePokemon)
firstView.appendChild(idPokemon)

card.appendChild(features)

}


const search = document.getElementById('search')

search.addEventListener('keyup',searchPokemon)

let error = "No se encontró el Pokemon"

function searchPokemon(event){

    if(event.code === 'Enter'){
        fetch(`https://pokeapi.co/api/v2/pokemon/${search.value}/`)
        .then(response=>response.json())
        .then(data=>{
        console.log(data);
        Pokedex(data)
    }).catch(err=>err+alert(error))
    }
     
}

const containerPoke = document.getElementById('containerPoke')

function Pokedex(data){

    containerPoke.innerHTML = ''

    const Containerpokemon = document.createElement('div')
    Containerpokemon.classList.add('containerImg')

    const pokemon = document.createElement('img')
    pokemon.setAttribute('src',data.sprites.front_default)
    pokemon.classList.add('img')

    const infoPokemon = document.createElement('div')
    infoPokemon.classList.add('infoPokemon')

    const namePokemon2 = document.createElement('h1')
    namePokemon2.textContent = data.name
    

    containerPoke.appendChild(Containerpokemon)
    Containerpokemon.appendChild(pokemon)

    containerPoke.appendChild(infoPokemon)
    infoPokemon.appendChild(namePokemon2)
}

