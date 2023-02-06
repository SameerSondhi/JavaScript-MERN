import React , {useEffect, useState} from 'react'
import axios from 'axios';
import {useParams, Link, useNavigate} from 'react-router-dom'
import '../App.css';

const Details = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams()
    const [deleteToggle, setDeleteToggle] = useState(false)
    const navigate = useNavigate()
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            setProduct(res.data)
        })
        .catch((err) => {
            console.log("This is our details page, " + err)})
        },[id, deleteToggle])

        const handleDelete = (e, id) => {
            axios.delete('http://localhost:8000/api/product/' + id)
                .then(res => {
                    setDeleteToggle(!deleteToggle)
                    navigate("/")
                })
                .catch(err => console.error(err));
                
        }

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Details: {product.description}</p>
            <button className='btn btn-dark'><Link to={`/update/${product._id}`}>Edit</Link></button> |<button className='btn btn-dark' onClick={(e)=>{handleDelete(e, product._id)}}>Delete</button>
        </div>
    )
} 

    export default Details