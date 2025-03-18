'use strict'

const pesquisarImagem = async (text) => {
    const key = '6ca719a09e727c39f05602c88a26d21b'
    const url = `https://www.superheroapi.com/api.php/${key}/search/${text}`
    const response = await fetch(url)
    return response.json()
}

const createCard = ({image}) =>{
    const card = document.createElement('div')
    card.innerHTML = `
        <img src= ${image.url}>
    `
    return card
}

//Trás as informações e criação do card
const pesquisarHeroi = async (text) => {
    const container = document.querySelector('.container')
    const {results} = await pesquisarImagem(text)
    const cards = results.map(createCard)
    container.replaceChildren(...cards)
    console.log(cards)
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