import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from 'axios'
import Error from "./Error";


const Planets = () => {
  const [planets, setPlanets] = useState('planets')
  const {id} = useParams();

useEffect(()=>{
    axios.get(`http://swapi.dev/api/planets/${id}`)
        .then(response=>{setPlanets(response.data)})
        .catch(error => {console.log(error)
        setPlanets({error: "These aren't the droids you are looking for."})
      });
        
}, [id]); 

if(planets.error){
  return(
    <div>
      <Error/>
    </div>
  )
}else{

  return (
    <div className="planets">
              <div>
            <h3>{planets.name}</h3>
            <p>Climate: {planets.climate}</p>
            <p>Terrain: {planets.terrain}</p>
            <p>Surface Water: {planets.surface_water}</p>
            <p>Population: {planets.population}</p>

              </div>
        
          </div>
              
          )
          }
        }
        
export default Planets
        

//Planets
    //Climate, terrain, surface water, population