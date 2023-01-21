import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from 'axios'
import Error from "./Error";

const People = () => {
  const [person, setPerson] = useState('people')
  const {id} = useParams();

useEffect(()=>{
  axios.get(`http://swapi.dev/api/people/${id}`)
  .then(response=>{setPerson(response.data)})
  .catch(error => {console.log(error)
  setPerson({error: "These aren't the droids you are looking for."})
});
  
}, [id]); 
if(person.error){
  return(
    <div>
      <Error/>
    </div>
  )
}else{

  return (
    <div className="people">
        <div>
            <h3>{person.name}</h3>
            <p>Height: {person.height}cm</p>
            <p>Mass: {person.mass}kg</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Skin Tone: {person.skin_color}</p>
        </div>
    </div>
        
    )
    }}
export default People
