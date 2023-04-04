import PropTypes from "prop-types";
import {useState} from "react"
import './App.css'
import PokemonCard from './components/PokemonCard'



const pokemonList = [
      {
      name: "famille",
      imgSrc: "https://www.stickees.com/files/cartoon/the-simpsons/2253-the-simpsons-01-sticker.png",
      },
      {
      name: "bart",
      imgSrc: "https://www.stickees.com/files/cartoon/the-simpsons/2243-bart-simpson-greeting.png",
      },
      {
      name: "bulbasaur",
      imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
      name: "charmander",
      imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
      name: "squirtle",
      imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
      name: "pikachu",
      imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
      name: "mew",
      },
      {
      name: "froufrou",
      },
];

pokemonList.propTypes={
  imgSrc: PropTypes.string,
  name: PropTypes.string.isRequired
};
  


function App() {
  const [count, setCount] = useState(1)
  
  function hangleclickPlus() {
        setCount(count + 1);
        // console.log(count);
  };
  function hangleclickMoins() {
        setCount(count -1);
        // console.log(count);
  };
  return (
    <div>
      {count > 0 ? <button onClick={hangleclickMoins}>previous</button> : null}
      {count < pokemonList.length ? <button onClick={hangleclickPlus}>next</button> : null}
      <PokemonCard {...pokemonList[count]}/>
    </div>
  )
}

export default App;
