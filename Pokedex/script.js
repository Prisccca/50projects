const poke_container = document.getElementById('poke-container')
const pokemon_count = 300
const colors = {
    fire: '#B22222',
    grass: '#228B22',
    electric: '#FFD700',
    water: '#7FFFD4',
    ground: '#8B4513',
    rock: '#d5d5d4',
    fairy: '#DDA0DD',
    poison: '#BC8F8F',
    bug: '#98FB98',
    dragon: '#97b3e6',
    psychic: '#D8BFD8',
    flying: '#E0FFFF',
    fighting: '#C0C0C0',
    normal: '#F5F5F5'
}

const main_types = Object.keys(colors)


const fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {

    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

    const id = pokemon.id.toString().padStart(3, '0')

    const poke_types = pokemon.types.map(type => type.type.name)
    const type = main_types.find(type => poke_types.indexOf(type) > -1)
    const color = colors[type]
    pokemonEl.style.backgroundColor = color



    const pokemonInnerHTML = `
    <div class="img-container">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt=""></div>
    <div class="info">
        <span class="number">${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span></small>
    </div>
`
    pokemonEl.innerHTML = pokemonInnerHTML
    poke_container.appendChild(pokemonEl)
}

fetchPokemons()

