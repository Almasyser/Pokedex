import { useEffect } from "react";

function PokemonCard(props){
    useEffect(() =>{
        console.log("pika pikachu !!!");
    },[props.name === "pikachu"])
    return (
        <figure className="card">
            {props.imgSrc? <img src={props.imgSrc} alt="pokemon" className="card-img"/> : <p>????</p>}
            <figcaption>{props.name}</figcaption>

        </figure>
    )
    
}
export default PokemonCard;