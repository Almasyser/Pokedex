import { useEffect } from "react";

function PokemonCard(props){
    useEffect(() =>{
        (props.name === "pikachu") ? console.log("pika pikachu !!!"):null
    },[props.name])
    return (
        <figure className="card">
            {props.imgSrc? <img src={props.imgSrc} alt="pokemon" className="card-img"/> : <p>????</p>}
            <figcaption>{props.name}</figcaption>

        </figure>
    )
    
}
export default PokemonCard;