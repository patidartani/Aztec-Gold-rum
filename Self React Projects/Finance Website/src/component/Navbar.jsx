import React from 'react'
import { Link } from 'react-router-dom'
import kanha from '../assets/Images/kanhatiger.png'

const Navbar = () => {
  return (
    <div>
       <div className='w-100 bg-primary d-flex justify-content-center align-items-center' style={{position: "fixed", zIndex: "999"}}>
            
            <nav class="w-100 navbar navbar-expand-lg bg-body-tertiary ">
            
                <div class="container-fluid ">
                    <div className='ms-5 text-center'>
                    <img src={kanha} alt="" width={100} height={100} className='object-fit-cover' />
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                   
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-evenly">
                            
                            <li class="nav-item dropdown d-flex justify-content-evenly align-items-center">
                                <Link class="nav-link active" to="/" role="button"> CIBIL REPORT</Link>
                               
                            </li>
                            <li class="nav-item dropdown d-flex justify-content-evenly align-items-center">
                                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    LOAN
                                </a>
                                <ul class="dropdown-menu">
                                    <Link to="/" style={{textDecoration: "none"}}><li><h6 class="dropdown-item">PERSONAL LOAN</h6></li></Link>
                                    <Link to="/" style={{textDecoration: "none"}}><li><h6 class="dropdown-item">BUSINESS LOAN</h6></li></Link>
                                    <Link to="/" style={{textDecoration: "none"}}><li><h6 class="dropdown-item">INSURANCE LOAN</h6></li></Link>
                                    <Link to="/" style={{textDecoration: "none"}}><li><h6 class="dropdown-item">VEHICLE LOAN</h6></li></Link>
                                    <Link to="/" style={{textDecoration: "none"}}><li><h6 class="dropdown-item">CREDITCARD LOAN</h6></li></Link>
                                    <Link to="/" style={{textDecoration: "none"}}><li><h6 class="dropdown-item">DIL</h6></li></Link>
                                    <Link to="/" style={{textDecoration: "none"}}><li><h6 class="dropdown-item">SAVING ACC.</h6></li></Link>

                                </ul>
                            </li>
                            <li class="nav-item dropdown d-flex justify-content-evenly align-items-center">
                                <Link class="nav-link active" to="/" role="button">LOAN ENQUIRY</Link>
                               
                            </li>
                            <li class="nav-item dropdown d-flex justify-content-evenly align-items-center">
                                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    OUR SERVICES
                                </a>
                                <ul class="dropdown-menu">
                                    <Link to="/" style={{textDecoration: "none"}}><li><h6 class="dropdown-item">DOVUMENT VERIFICATION</h6></li></Link>
                                    <Link to="/" style={{textDecoration: "none"}}><li><h6 class="dropdown-item">BANK STATEMENT</h6></li></Link>
                                 </ul>
                            </li>
                            <li class="nav-item dropdown d-flex justify-content-evenly align-items-center">
                                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    TRAINING
                                </a>
                                <ul class="dropdown-menu">
                                    <Link to="/" style={{textDecoration: "none"}}><li><h6 class="dropdown-item">CAREER</h6></li></Link>
                                    <Link to="/" style={{textDecoration: "none"}}><li><h6 class="dropdown-item">ASSOCIATE</h6></li></Link>
                                    <Link to="/" style={{textDecoration: "none"}}><li><h6 class="dropdown-item">PORTAL</h6></li></Link>
                                 </ul>
                            </li>

                           
                            
                            <li class="nav-item dropdown d-flex justify-content-evenly align-items-center">
                                <Link class="nav-link active" to="/" role="button">MARKETING AUTOMATION</Link>
                               
                            </li>
                            <li class="nav-item dropdown d-flex justify-content-evenly align-items-center">
                                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    ABOUT US
                                </a>
                                <ul class="dropdown-menu">
                                    <Link to="/" style={{textDecoration: "none"}}><li><h6 class="dropdown-item">PARTENERS</h6></li></Link>
                                    <Link to="/" style={{textDecoration: "none"}}><li><h6 class="dropdown-item">OUR TEAM</h6></li></Link>
                                    <Link to="/" style={{textDecoration: "none"}}><li><h6 class="dropdown-item">OUR PRODUCT</h6></li></Link>
                                 </ul>
                            </li>
                            {/* <li class="nav-item dropdown d-flex justify-content-evenly align-items-center">
                                <Link class="nav-link active" to="/" role="button">EBOOK</Link>
                               
                            </li>
                           
                            <li class="nav-item dropdown d-flex justify-content-evenly align-items-center ">
                                <Link class="nav-link active" to="/" role="button"><input type="text" placeholder='Search' className='rounded' /></Link>
                               
                            </li>
                            <li class=" nav-item dropdown d-flex justify-content-evenly align-items-center  ">
                                <Link class="nav-link active" to="/" role="button"><i class="ri-shopping-cart-2-fill fs-3"></i></Link>
                               
                               
                            </li>
                            <li class=" nav-item dropdown d-flex justify-content-evenly align-items-center  ">
                               
                               
                            <Link class="nav-link active" to="/" role="button">LOGIN</Link>
                            </li>
                            <li class=" nav-item dropdown d-flex justify-content-evenly align-items-center  ">
                               
                                <Link class="nav-link active" to="/" role="button">JOIN NOW</Link>
                               
                             
                               </li> */}
                               


                           

                           

                            


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar