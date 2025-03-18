'use strict'

const pesquisarImagem = async (text) => {
    const key = '6ca719a09e727c39f05602c88a26d21b'
    const url = `https://www.superheroapi.com/api.php/${key}/search/${text}`
    const response = await fetch(url)
    return response.json()
}

const pesquisarHeroi = async (text) => {
    const imagemHeroi = await pesquisarImagem(text)
    console.log(imagemHeroi)
}

// Ao presionar a tecla enter pegar o valor da função pesquisar
const handleKeypress = ({key, target}) =>{
    if (key === 'Enter'){
        pesquisarHeroi(target.value)
    }
}

document.querySelector('#pesquisa-heroi')
        .addEventListener('keypress', handleKeypress)

// async function pesquisarHeroi(pesquisarHeroi) {
//     const url = `https://www.superheroapi.com/api.php/6ca719a09e727c39f05602c88a26d21b/search/${pesquisarHeroi}`
//     const response = await fetch(url)
//     const date = await response.json()

//     return date
// }

// function criarImagem(link){
//     const imagemHeroi = document.getElementById('imagem')
//     const novaImagemHeroi = document.createElement('img')
//     novaImg.src = link

//     imagemHeroi.appendChild(novaImagemHeroi)
// }

// async function dadosHeroi() {
//     const heroi = document.getElementById('pesquisaHeroi').value
//     const fotoHeroi = await pesquisarHeroi(heroi)
//     const imagemHeroi = document.getElementById('imagem')
//     imagemHeroi.replaceChildren('')


//     console.log(fotoHeroi)
// }

// document.getElementById('buttonPesquisa').addEventListener('click', dadosHeroi)