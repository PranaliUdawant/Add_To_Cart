import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { Link } from 'react-router-dom'
import { ProductContext } from '../App'

export default function Home() {
    const { products } = useContext(ProductContext)

    return (
        <>

            <div className="container" style={{ backgroundColor: "red" }}>
                <div className="row ">
                    <div className="d-flex col-sm-12">
                        {
                            products.map(item => <Link to={`/product-details/${item.id}`}>
                                <div className='col-sm-8 '>
                                    <div className="card ">
                                        <img src={item.image} className="img-fluid" alt="" />
                                        <div className="card-body">
                                            <h4>{item.name}</h4>
                                            <h4>{item.price}</h4>
                                        </div>
                                    </div>
                                </div>
                            </Link>)
                        }
                    </div>
                </div>
            </div>

        </>
    )
}
