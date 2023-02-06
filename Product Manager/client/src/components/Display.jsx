import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import '../App.css';

const Display = () => {
    const [productList, setProductList] = useState([]);
    const [deleteToggle, setDeleteToggle] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => {
                console.log(res.data)
                setProductList(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [deleteToggle])

    const handleDelete = (e, id) => {
        axios.delete('http://localhost:8000/api/product/' + id)
            .then(res => {
                setDeleteToggle(!deleteToggle)
            })
            .catch(err => console.error(err));
    }
    return (
        <div >
            <h2>All Products:</h2>
            {
                <table style={{margin:"auto"}}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            productList.map((product, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{product.title}</td>
                                        <td><button className='btn btn-dark'><Link to={`/details/${product._id}`}>Details</Link></button> |  
                                        <button className='btn btn-dark'><Link to={`/update/${product._id}`}>Edit</Link></button>  |
                                        <button className='btn btn-dark' onClick={(e)=>{handleDelete(e, product._id)}}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
            }

        </div>
    )
}
export default Display



