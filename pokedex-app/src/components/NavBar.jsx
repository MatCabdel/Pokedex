function NavBar ({pokemonIndex, setPokemonIndex, pokemonList}) {

    const handleClick = () => {
        if (pokemonIndex < pokemonList.length +1)
        setPokemonIndex(pokemonIndex + 1);
      }
      const lessClick = () => {
        if (pokemonIndex > 0)
        setPokemonIndex(pokemonIndex - 1);
      }

    return (
        <div>
          {pokemonIndex > 0 && <button onClick={lessClick}>Précedent</button>}
          {pokemonIndex < 4 && <button onClick={handleClick}>Suivant</button>}
      </div>
      );
    
    }


export default NavBar