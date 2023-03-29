function PokemonCard(){
    const pokemon =  pokemonList[0]
    return (
        <figure className="card">
            {pokemon.imgSrc? <img src={pokemon.imgSrc} alt="pokemon" className="card-img"/> : <p>????</p>}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    )
    return pokemon
}

const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    },
    {
        name: "mew",
    },
];
export default PokemonCard;