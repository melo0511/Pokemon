window.addEventListener('DOMContentLoaded',consumoApi)

const containerCards = document.querySelector('.containerCards')

// Consumir pokemones

function consumoApi(){
    // fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898') TODOS LOS POKEMON
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
    hability2.textContent = data.abilities[0].ability.name

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

// Pokedex

//Animacion al cargar la ventana

const search = document.getElementById('search')
const show = document.getElementById('show')
const Containerinfo = document.getElementById('Containerinfo')

const searching = document.createElement('h3')
const searchingInfo = document.createElement('h3')

window.addEventListener('DOMContentLoaded',()=>{

    setTimeout(()=>{

        let temporizador = setInterval(() => {
            show.appendChild(searching)
            searching.textContent = "Initiating Pokedex..."
        }, 1000);
    
        let temporizadorVacio = setInterval(() => {
            searching.textContent = " "
        }, 2000);
    
        setTimeout(() => {

            clearInterval(temporizador)
            clearInterval(temporizadorVacio)

            Containerinfo.appendChild(searchingInfo)
            searchingInfo.textContent = "¡WELCOME!"

            setTimeout(() => {
                
                const presentation = document.createElement('img')
                const containerImgPresentation = document.createElement('div')
                containerImgPresentation.classList.add('containerImgPresentation')
                
                containerImgPresentation.appendChild(presentation)
                show.appendChild(containerImgPresentation)

                setTimeout(()=>{

                    search.disabled = false
                    flechaArriba.disabled = false
                    flechaAbajo.disabled = false
                    flechaIzquierda.disabled = false
                    flechaDerecha.disabled = false
                    // console.log("Habilitado");

                },1000)

            }, 1000);

        }, 6000);
        
    },1000)
})

//Fin animacion al cargar la ventana

//Buscador

search.addEventListener('keyup',searchPokemon)

function searchPokemon(){

    // console.log(searchLowerCase);

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

    fetchNormal()

}

//Cambiar Pokemon

const flechaArriba = document.getElementById('flechaArriba')
const flechaAbajo = document.getElementById('flechaAbajo')

flechaArriba.addEventListener('click',()=>{

    search.value++

    if(search.value>898){
        search.value--
    }else{
        searchPokemon()
    }
    
})

flechaAbajo.addEventListener('click',()=>{

    search.value--

    if(search.value<1){
        search.value++
    }else{
        searchPokemon()
    }

})

function fetchNormal(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${search.value}/`)
        .then(response=>response.json())
        .then(data=>{
        // console.log(data);
        Pokedex(data)
    })
}

//Pintar Card

const pokemon = document.createElement('img')

function Pokedex(data){

    show.innerHTML = ""
    Containerinfo.innerHTML = ""

    const Containerpokemon = document.createElement('div')
    Containerpokemon.classList.add('containerImgPoke')

    pokemon.setAttribute('src',data.sprites.front_default)
    pokemon.classList.add('imgPoke')

    const containerP = document.createElement('div')
    containerP.classList.add('containerP')

    const containerName = document.createElement('div')
    containerName.classList.add('containerName')

    const containerId = document.createElement('div')
    containerId.classList.add('containerId')

    const PokedexName = document.createElement('h3')
    PokedexName.classList.add('text')
    PokedexName.textContent = data.name

    const idPokemon = document.createElement('h3')
    idPokemon.classList.add('text')
    idPokemon.textContent = data.id

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
    hability2.textContent = data.abilities[0].ability.name

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

    Containerpokemon.appendChild(containerP)
    containerP.appendChild(containerName)
    containerP.appendChild(pokemon)
    containerP.appendChild(containerId)
    containerName.appendChild(PokedexName)
    containerId.appendChild(idPokemon)

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

    //Voltear pokemon

    let position = 0

    function front(){
            pokemon.setAttribute('src',"")
            pokemon.setAttribute('src',data.sprites.back_default)
            pokemon.classList.add('imgPoke')
            Containerpokemon.appendChild(containerP)
            containerP.appendChild(containerName)
            containerP.appendChild(pokemon)
            containerP.appendChild(containerId)
    }

    function back(){
            pokemon.setAttribute('src',"")
            pokemon.setAttribute('src',data.sprites.front_default)
            pokemon.classList.add('imgPoke')
            Containerpokemon.appendChild(containerP)
            containerP.appendChild(containerName)
            containerP.appendChild(pokemon)
            containerP.appendChild(containerId)
    }

    const flechaIzquierda = document.getElementById('flechaIzquierda')
    const flechaDerecha = document.getElementById('flechaDerecha')

    flechaDerecha.addEventListener('click',()=>{

        position++

        if(position>1){
            position=0
        }

        // console.log(position);

        if(position===0){
            back()
        }
        if(position===1){
            front()
        }

    })

    flechaIzquierda.addEventListener('click',()=>{
        
        position++

        if(position>1){
            position=0
        }

        // console.log(position);

        if(position===0){
            back()
        }
        if(position===1){
            front()
        }

    })
}

// Lista de pokemones

const capa = document.getElementById('capa')
const lista = document.getElementById('lista')

const abrirCapa = document.getElementById('abrirCapa')
const cerrarCapa = document.getElementById('cerrarCapa')

window.addEventListener('DOMContentLoaded',()=>{
    capa.style.display = 'none'
    consumoApiLista()
})

abrirCapa.addEventListener('click',()=>{
    capa.style.display = 'flex'
    abrirCapa.style.display = 'none'
})

cerrarCapa.addEventListener('click',()=>{
    capa.style.display = 'none'
    abrirCapa.style.display = 'flex'
})

function consumoApiLista(){
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898')
    .then(response=>response.json())
    .then(response=>response.results.map(element=>{
        ListaPokemones(element)
    }))
}

function ListaPokemones(data) {
    // const LidPokemon = document.createElement('p')

    const LnombrePokemon = document.createElement('p')
    LnombrePokemon.classList.add('object')
    LnombrePokemon.textContent = data.name
    
    lista.appendChild(LnombrePokemon)

}