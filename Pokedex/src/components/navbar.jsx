import { useState } from 'react';
import PokemonCard from './PokemonCard'
function navbar({props}) {
  const [count, setCount] = useState(3)
  console.log(props.length);
    
    function hangleclickPlus() {
          setCount(count + 1);
         
    };
    function hangleclickMoins() {
          setCount(count -1);
    };   
    return (
      <div>
        {count > 0 ? <button onClick={hangleclickMoins}>previous</button> : null}
        {count < props.length ? <button onClick={hangleclickPlus}>next</button> : null}
        <PokemonCard {...props[count]}/>
      </div>
    )
}
export default navbar;