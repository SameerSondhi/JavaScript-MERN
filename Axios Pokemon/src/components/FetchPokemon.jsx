import React, {useState} from 'react'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

const FetchPokemon = () => {
    const [pokemons, setPokemons] = useState([])


    const fetchData = () =>{
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807/")
        .then((response)=>{console.log("This is the .then function ", response.data)
        setPokemons(response.data.results)})
        .catch((error)=>{console.log("This is the error message ", error)})

        console.log("Running before data is received")
    }
return(
    <div>
<button onClick={fetchData} className='btn btn-outline-success'>Fetch Pokemon</button>
            <h1>Fetch Pokemon</h1>
{
    pokemons.map((pokemon, name) => {
    return(
        <div key = {name}>
            <li>{pokemon.name.toUpperCase()}</li>
        </div>
    );

    }
)}
</div>
    
)
}

export default FetchPokemon