import PropTypes from "prop-types";

import './App.css'
import PokemonCard from './components/PokemonCard'

pokemonList.propTypes = {
  imgSrc: PropTypes.string,
  name: PropTypes.string.isRequired,
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

function App() {
  return (
    <div>
      <PokemonCard {...pokemonList[0]}/>
    </div>
  )
}



export default App
