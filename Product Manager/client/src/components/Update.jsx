import React, {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../App.css';

const Update = () => {
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res=> {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    },[id])

    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new product
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then((res)=> {navigate("/")})
            .catch(err=>console.log(err))
    }
  return (
        <div>
        <h2>Update This Product</h2>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} />
            </p>
                <input className='btn btn-dark' type="submit"/>
        </form>
        <hr />
        </div>
  )}


export default Update