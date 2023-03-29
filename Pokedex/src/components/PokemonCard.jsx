function PokemonCard(props){
    // console.log(props)
    
    return (
        <figure className="card">
            {props.imgSrc? <img src={props.imgSrc} alt="pokemon" className="card-img"/> : <p>????</p>}
            <figcaption>{props.name}</figcaption>
        </figure>
    )
    
}




export default PokemonCard;