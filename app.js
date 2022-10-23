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

// Renderizar pokemones

function createCards(data){

    console.log(data);

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

    const typePokemon = document.createElement('div')
    typePokemon.classList.add('divStat')
    const typeP = document.createElement('p')
    typeP.textContent = "Type: "
    const typeP2 = document.createElement('p')
    typeP2.textContent = data.types[0].type.name

    const statPokemon1 = document.createElement('div')
    statPokemon1.classList.add('divStat')
    const hability = document.createElement('p')
    hability.textContent = "Hability: "
    const hability2 = document.createElement('p')
    hability2.textContent = data.abilities[1].ability.name

    const statPokemon2 = document.createElement('div')
    statPokemon2.classList.add('divStat')
    const hp = document.createElement('p')
    hp.textContent = data.stats[0].stat.name
    const hp2 = document.createElement('p')
    hp2.textContent = data.stats[0].base_stat

    const statPokemon3 = document.createElement('div')
    statPokemon3.classList.add('divStat')
    const attack = document.createElement('p')
    attack.textContent = data.stats[1].stat.name
    const attack2 = document.createElement('p')
    attack2.textContent = data.stats[1].base_stat

    const statPokemon4 = document.createElement('div')
    statPokemon4.classList.add('divStat')
    const defense = document.createElement('p')
    defense.textContent = data.stats[2].stat.name
    const defense2 = document.createElement('p')
    defense2.textContent = data.stats[2].base_stat

    containerCards.appendChild(card)

    card.appendChild(rotomDex)
    card.appendChild(firstView)
    firstView.appendChild(namePokemon)
    firstView.appendChild(containerImg)
    containerImg.appendChild(imagePokemon)
    firstView.appendChild(idPokemon)

    card.appendChild(features)

    features.appendChild(typePokemon)
    typePokemon.appendChild(typeP)
    typePokemon.appendChild(typeP2)

    features.appendChild(statPokemon1)
    statPokemon1.appendChild(hability)
    statPokemon1.appendChild(hability2)

    features.appendChild(statPokemon2)
    statPokemon2.appendChild(hp)
    statPokemon2.appendChild(hp2)

    features.appendChild(statPokemon3)
    statPokemon3.appendChild(attack)
    statPokemon3.appendChild(attack2)

    features.appendChild(statPokemon4)
    statPokemon4.appendChild(defense)
    statPokemon4.appendChild(defense2)

}

// Pokedex Buscador

const search = document.getElementById('search')
const show = document.getElementById('show')
const Containerinfo = document.getElementById('Containerinfo')

search.addEventListener('keyup',searchPokemon)

let error = "No se encontró el Pokemon"



function searchPokemon(){

    const searching = document.createElement('h3')
    const searchingInfo = document.createElement('h3')

    if(search.value===""){
        show.innerHTML = ""
        Containerinfo.innerHTML = ""
    }else{
        show.innerHTML = ""
        Containerinfo.innerHTML = ""

        show.appendChild(searching)
        searching.textContent = "Searching..."
        Containerinfo.appendChild(searchingInfo)
        searchingInfo.textContent = "..."
    }

        fetch(`https://pokeapi.co/api/v2/pokemon/${search.value}/`)
        .then(response=>response.json())
        .then(data=>{
        console.log(data);
        Pokedex(data)
    })
    
}

function Pokedex(data){

    show.innerHTML = ''
    Containerinfo.innerHTML = ''

    const Containerpokemon = document.createElement('div')
    Containerpokemon.classList.add('containerImgPoke')

    const pokemon = document.createElement('img')
    pokemon.setAttribute('src',data.sprites.front_default)
    pokemon.classList.add('imgPoke')

    const infoPokemon = document.createElement('div')
    infoPokemon.classList.add('infoPokemon')

    const typePokemon = document.createElement('div')
    typePokemon.classList.add('divStat')
    const typeP = document.createElement('p')
    typeP.textContent = "Type: "
    const typeP2 = document.createElement('p')
    typeP2.textContent = data.types[0].type.name

    const statPokemon1 = document.createElement('div')
    statPokemon1.classList.add('divStat')
    const hability = document.createElement('p')
    hability.textContent = "Hability: "
    const hability2 = document.createElement('p')
    hability2.textContent = data.abilities[1].ability.name

    const statPokemon2 = document.createElement('div')
    statPokemon2.classList.add('divStat')
    const hp = document.createElement('p')
    hp.textContent = data.stats[0].stat.name
    const hp2 = document.createElement('p')
    hp2.textContent = data.stats[0].base_stat

    const statPokemon3 = document.createElement('div')
    statPokemon3.classList.add('divStat')
    const attack = document.createElement('p')
    attack.textContent = data.stats[1].stat.name
    const attack2 = document.createElement('p')
    attack2.textContent = data.stats[1].base_stat

    const statPokemon4 = document.createElement('div')
    statPokemon4.classList.add('divStat')
    const defense = document.createElement('p')
    defense.textContent = data.stats[2].stat.name
    const defense2 = document.createElement('p')
    defense2.textContent = data.stats[2].base_stat
        

    show.appendChild(Containerpokemon) //imagen
    Containerpokemon.appendChild(pokemon)

    Containerinfo.appendChild(infoPokemon) //info

    infoPokemon.appendChild(typePokemon)
    typePokemon.appendChild(typeP)
    typePokemon.appendChild(typeP2)

    infoPokemon.appendChild(statPokemon1)
    statPokemon1.appendChild(hability)
    statPokemon1.appendChild(hability2)

    infoPokemon.appendChild(statPokemon2)
    statPokemon2.appendChild(hp)
    statPokemon2.appendChild(hp2)

    infoPokemon.appendChild(statPokemon3)
    statPokemon3.appendChild(attack)
    statPokemon3.appendChild(attack2)

    infoPokemon.appendChild(statPokemon4)
    statPokemon4.appendChild(defense)
    statPokemon4.appendChild(defense2)
}

