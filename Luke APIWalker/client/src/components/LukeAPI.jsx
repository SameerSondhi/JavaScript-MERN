import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const LukeAPI = () => {
    const [category, setCategory] = useState('people')
    const [id, setId] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/${category}/${id}`)
    }
    return (
        <div className="main">
            <form onSubmit={handleSubmit} action="submit">
                <label className="search">Search For: </label>
                <select className="btn btn-outline-success" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="people" >People</option>
                    <option value="planets" >Planets</option>
                </select>
                <label htmlFor="id">ID: </label>
                <input className="idx" value={id} type="text" onChange={(e) => setId(e.target.value)} />
                <button className="btn btn-success"type="submit">Search</button>
            </form>
        </div>

    )
}

export default LukeAPI


// route1: "people": "https://swapi.dev/api/people/",
// route2: "planets": "https://swapi.dev/api/planets/"