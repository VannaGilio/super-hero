'use strict'

const pesquisarImagem = async (text) => {
    const key = '6ca719a09e727c39f05602c88a26d21b'
    const url = `https://www.superheroapi.com/api.php/${key}/search/${text}`
    const response = await fetch(url)
    return response.json()
}

const createCard = ({image, name, appearance}) =>{
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
                <h3>POWERSTATS</h3>
                <h3>BIOGRAPHY</h3>
                <h3>APPEARANCE</h3>
                <h3>CONNECTIONS</h3>
                <h3>WORK</h3>
            </div>
        </div>
    </div>
    `
    return card
}

//Trás as informações e criação do card
const pesquisarHeroi = async (text) => {
    const container = document.querySelector('.conteudo')
    const {results} = await pesquisarImagem(text)
    const cards = results.map(createCard)
    container.replaceChildren(...cards)
    document.querySelector('#pesquisar-heroi').velue = text
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