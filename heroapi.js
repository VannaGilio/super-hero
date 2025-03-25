'use strict'

const pesquisarImagem = async (text) => {
    const key = '6ca719a09e727c39f05602c88a26d21b'
    const url = `https://www.superheroapi.com/api.php/${key}/search/${text}`
    const response = await fetch(url)
    return response.json()
}

const createCard = ({image, name, appearance, powerstats}) =>{
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
                <ul class = "lista-powerstats">
                    <li>INTELLIGENCE: ${powerstats.intelligence} </li>
                    <li>STRENGTH: </li>
                    <li>SPEED: </li>
                    <li>DURABILITY: </li>
                    <li>POWER: </li>
                    <li>COMBAT: </li>
                </ul>

                <h3>BIOGRAPHY</h3>
                <h3>APPEARANCE</h3>
                <h3>CONNECTIONS</h3>
                <h3>WORK</h3>
            </div>
        </div>
    </div>
    `

    //Clicar e aparecer as caractwristicas
    const clickPowerstats = card.querySelector('.click-powerstats')
    const listaPowerstats = card.querySelector('.lista-powerstats')

    clickPowerstats.addEventListener('click', (event) => {
        event.preventDefault()  //"muda" a direção que o href teria, pq ele é um link e a API não
        listaPowerstats.style.display = listaPowerstats.style.display === 'none' ? 'block' : 'none' 
    })


    return card
}

//Trás as informações e criação do card
const pesquisarHeroi = async (text) => {
    const container = document.querySelector('.container')
    const {results} = await pesquisarImagem(text)
    const cards = results.map(createCard)
    container.replaceChildren(...cards)
    document.querySelector('#pesquisa-heroi').value = text
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