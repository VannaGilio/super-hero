'use strict'

const pesquisarImagem = async (text) => {
    const key = '6ca719a09e727c39f05602c88a26d21b'
    const url = `https://www.superheroapi.com/api.php/${key}/search/${text}`
    const response = await fetch(url)
    return response.json()
}

const createCard = ({image, name, appearance, powerstats, biography, connections, work, publisher}) =>{
    const card = document.createElement('div')
    card.classList.add('section')
    
    card.innerHTML = `
    <div class="section">
        <img id="heroi" src= ${image.url}>
        <div class="info-heroi">
            <div class="nome-heroi">
                ${name}
            </div>

            <div class="caracteristicas">
                <h3><a href="#" class="click-powerstats">POWERSTATS</a></h3>
                <h3><a href="#" class="click-biography">BIOGRAPHY</a></h3>
                <h3><a href="#" class="click-appearance">APPEARANCE</a></h3>
                <h3><a href="#" class="click-connections">CONNECTIONS</a></h3>
                <h3><a href="#" class="click-work">WORK</a></h3>
                <h3><a href="#" class="click-publisher">PUBLISHER</a></h3>
            </div>

            <div class="listas">
                <div class="lista">
                    <ul class = "lista-powerstats">
                        <li>INTELLIGENCE:   ${powerstats.intelligence} </li>
                        <li>STRENGTH:   ${powerstats.strength}</li>
                        <li>SPEED:   ${powerstats.speed}</li>
                        <li>DURABILITY:   ${powerstats.durability}</li>
                        <li>POWER:   ${powerstats.power}</li>
                        <li>COMBAT:   ${powerstats.combat}</li>
                    </ul>
                </div>

                <div class="lista">
                    <ul class = "lista-biography">
                        <li>FULL NAME:   ${biography["full-name"]}</li>
                        <li>ALTER-EGOS:   ${biography["alter-egos"]}</li>
                        <li>ALIASES:   ${biography["aliases"]}</li>
                        <li>PLACE OF BIRTH:   ${biography["place-of-birth"]}</li>
                        <li>FIRST APPEARANCE:   ${biography["first-appearance"]}</li>
                        <li>ALIGNMENT:   ${biography["alignment"]}</li>
                    </ul>
                </div>

                <div class="lista">
                    <ul class = "lista-appearance">
                        <li>GENDER:   ${appearance.gender}</li>
                        <li>RACE:   ${appearance.race}</li>
                        <li>HEIGHT:   ${appearance.height}</li>
                        <li>WEIGHT:   ${appearance.weight}</li>
                        <li>EYE-COLOR:   ${appearance["eye-color"]}</li>
                        <li>HAIR-COLOR:   ${appearance["hair-color"]}</li>
                    </ul>
                </div>

                <div class="lista">
                    <ul class = "lista-connections">
                        <li>GROUP-AFFILIATION:   ${connections["group-affiliation"]}</li>
                        <li>RELATIVES:   ${connections.relatives}</li>
                    </ul>
                </div>
                
                <div class="lista">
                    <ul class = "lista-work">
                        <li>OCCUPATION:   ${work.occupation}</li>
                        <li>BASE:   ${work.base}</li>
                    </ul>
                </div>

                <div class="lista">
                    <ul class = "lista-publisher">
                        <li>PUBLISHER:   ${biography.publisher}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `

    const esconderCaracteristicas = () => {
        listaPowerstats.style.display = 'none'
        listaBiography.style.display = 'none'
        listaAppearance.style.display = 'none'
        listaConnections.style.display = 'none'
        listaWork.style.display = 'none'
        listaPublisher.style.display = 'none'
    }

    const clickPublisher = card.querySelector('.click-publisher')
    const listaPublisher = card.querySelector('.lista-publisher')
    clickPublisher.addEventListener('click', (event) => { 
        event.preventDefault()
        esconderCaracteristicas()
        listaPublisher.style.display = listaPublisher.style.display === 'none' ? 'block' : 'none' 
    })

    //Clicar e aparecer as caractwristicas
    const clickPowerstats = card.querySelector('.click-powerstats')
    const listaPowerstats = card.querySelector('.lista-powerstats')
    clickPowerstats.addEventListener('click', (event) => { //perguntar para o prof se tem como fazer isso como uma "repetição"
        event.preventDefault()  //"muda" a direção que o href teria, pq ele é um link e a API não
        esconderCaracteristicas() //"esconder" a caracrteristica anterior
        listaPowerstats.style.display = listaPowerstats.style.display === 'none' ? 'block' : 'none' //não aparecer direto na tela após pesquisa
    })

    const clickBiography = card.querySelector('.click-biography')
    const listaBiography = card.querySelector('.lista-biography')
    clickBiography.addEventListener('click', (event) => { 
        event.preventDefault()
        esconderCaracteristicas()
        listaBiography.style.display = listaBiography.style.display === 'none' ? 'block' : 'none' 
    })

    const clickAppearance = card.querySelector('.click-appearance')
    const listaAppearance = card.querySelector('.lista-appearance')
    clickAppearance.addEventListener('click', (event) => { 
        event.preventDefault()
        esconderCaracteristicas()
        listaAppearance.style.display = listaAppearance.style.display === 'none' ? 'block' : 'none' 
    })

    const clickConnections = card.querySelector('.click-connections')
    const listaConnections = card.querySelector('.lista-connections')
    clickConnections.addEventListener('click', (event) => { 
        event.preventDefault()
        esconderCaracteristicas()
        listaConnections.style.display = listaConnections.style.display === 'none' ? 'block' : 'none' 
    })

    const clickWork = card.querySelector('.click-work')
    const listaWork = card.querySelector('.lista-work')
    clickWork.addEventListener('click', (event) => { 
        event.preventDefault()
        esconderCaracteristicas()
        listaWork.style.display = listaWork.style.display === 'none' ? 'block' : 'none' 
    })

    return card
}

//Trás as informações e criação do card
const pesquisarHeroi = async (text) => {
    const container = document.querySelector('.container')
    const {results} = await pesquisarImagem(text)
    if(results){
        const cards = results.map(createCard)
        container.replaceChildren(...cards)
    }else{
        alert("Herói não encontrado!")
    }
    
    document.querySelector('#pesquisa-heroi').value = ''
}

// Ao presionar a tecla enter pegar o valor da função pesquisar
const handleKeypress = ({key, target}) =>{
    if (key === 'Enter'){
        pesquisarHeroi(target.value)
    }
}

// Tecla enter
document.querySelector('#pesquisa-heroi')
        .addEventListener('keypress', handleKeypress)