
function PokemonCard ({pokemon}) {
    console.log({pokemon});

    return (
    <div>
        <figure>
            
                {pokemon.imgSrc ? 
                <img src={pokemon.imgSrc} alt="Bulbi" />
                : <p>???</p>}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    </div>
    )
}


export default PokemonCard;