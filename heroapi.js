'use strict'

<<<<<<< HEAD
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
=======
async function pesquisarHeroi(pesquisarHeroi) {
    const accessToken = `6ca719a09e727c39f05602c88a26d21b`
    const url = `https://www.superheroapi.com/api.php/${accessToken}/search/${pesquisarHeroi}`
    
    const response = await fetch(url) 
    const data = await response.json()

    return data
    
}

function criarImagem(link){
    const imagemHeroi = document.getElementById('imagem')
    const novaImagemHeroi = document.createElement('img')
    novaImagemHeroi.src = link
    imagemHeroi.appendChild(novaImagemHeroi)
}

async function dadosHeroi() {
    const heroi = document.getElementById('pesquisaHeroi').value
    const fotoHeroi = await pesquisarHeroi(heroi)
    const imagemHeroi3 = document.getElementById('imagem')
    imagemHeroi3.replaceChildren('')

    console.log(fotoHeroi)
>>>>>>> 9eeb6c3be5ff65c9898b5e2c62bf042bfa284076
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