import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid" style={{ backgroundColor: "yellow" }}>
                    <a class="navbar-brand" href="#">Shoppy</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to='/' className='nav-link active'>Home</Link>
                            <Link to='/cart' className='nav-link'>Cart <span class="badge bg-primary">0</span></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
