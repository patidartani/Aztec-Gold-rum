import React from 'react'
import "./Pirahome.css"
import calcuimg1 from "../assets/Images/calcuimg1.jpg"
import calcuimg2 from "../assets/Images/calcuimg2.jpg"

const Pirahome = () => {
    return (
        <div>
            <div className='piramain'>
                <div className='pirah2'>
                    <h2>Loan Products</h2>
                </div>
                <div className='piracard'>
                    <div className='pirabox'>
                        <i class="ri-home-heart-line"></i>
                        <h5>Buy New Home</h5>
                    </div>
                    <div className='pirabox'>
                        <i class="ri-building-3-fill"></i>
                        <h5>Home Constuction</h5>
                    </div>
                    <div className='pirabox'>
                        <i class="ri-hand-coin-fill"></i>
                        <h5>Business Loan</h5>
                    </div>
                    <div className='pirabox'>
                        <i class="ri-hand-coin-line"></i>
                        <h5>Personal Loan</h5>
                    </div>
                    <div className='pirabox'>
                        <i class="ri-home-office-line"></i>
                        <h5>Loan Against Property</h5>
                    </div>
                    <div className='pirabox'>
                        <i class="ri-ancient-gate-fill"></i>
                        <h5>Secured Business Loan</h5>
                    </div>
                </div>

                <div className='piracalcu'>
                    <h3>Calculator</h3>
                    <h5>Plan your loan EMI and check loan amount eligibility</h5>
                </div>
                <div className='calcumain'>

                    <div className='calcubox'>
                        {/* <div className='calculayer'> */}
                        <img src={calcuimg1} alt="" />
                        {/* </div> */}
                       
                        <div className='calcucontent'>
                            <h4>EMI Calculator</h4>
                            <button>Try Now</button>
                        </div>
                    </div>
                    <div className='calcubox'>
                        <img src={calcuimg2} alt="" />
                        <div className='calcucontent'>
                            <h4>Eligibility Calculator</h4>
                            <button>Try Now</button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Pirahome