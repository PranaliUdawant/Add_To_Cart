import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from '../App'

export default function Details() {
    const { id } = useParams()
    const { products } = useContext(ProductContext)
    const result = products.find(item => item.id == id)
    console.log("products", products);
    console.log("result", result);
    console.warn("result", result.id);
    const [count, setcount] = useState(0)
    const inc = e => {
        setcount(count + 1)
    }
    const dec = e => {
        setcount(count - 1)
    }
    const navigate = useNavigate()
    const handlecart = () => {
        navigate("/cart")
    }
    return (
        <>
            <h1>{JSON.stringify(result)}</h1>
            {/* <h1>{result.name}</h1>
            <div>Details</div> */}
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="col-sm-4">
                                    <img src={result.image} className="img-fluid" alt="" />
                                </div>
                                <div className="col-sm-8">
                                    <h1>{result.name}</h1>
                                    <h2>{result.price}</h2>
                                    <p>{result.stock}</p>
                                    <button onClick={inc} className="btn btn-dark">+</button>
                                    <span>{count}</span>
                                    <button onClick={dec} className="btn btn-dark">-</button>
                                    <br /> <br />
                                    <button onClick={handlecart} className="btn btn-primary">ADD TO Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
