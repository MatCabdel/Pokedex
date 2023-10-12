function NavBar ({pokemonList, handleClick}) {

    
      /*const lessClick = () => {
        if (pokemonIndex > 0)
        setPokemonIndex(pokemonIndex - 1);
      }*/
      
      return (
        <div>
          {pokemonList.map((pokemon, pokemonIndex) => {
            return (<button key={pokemon.name} onClick={() => handleClick(pokemonIndex)}>{pokemon.name}</button>)
          })}
        </div>
          )
    /*return (
        <div>
          {pokemonIndex > 0 && <button onClick={lessClick}>Précedent</button>}
          {pokemonIndex < 4 && <button onClick={handleClick}>Suivant</button>}
      </div>
      );*/
    
    }


export default NavBar