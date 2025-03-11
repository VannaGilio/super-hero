'use strict'

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
}

document.getElementById('buttonPesquisa').addEventListener('click', dadosHeroi)