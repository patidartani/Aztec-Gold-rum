import React from 'react'
import hand from '../assets/Images/hand.webp'
import more from '../assets/Images/more.webp'
import presence from '../assets/Images/presence.webp'
import prtener from '../assets/Images/prtener.webp'
import bloom from '../assets/Images/bloom.svg'
import finance from '../assets/Images/finance.svg'
import economic from '../assets/Images/economic.svg'

const Since = () => {
  return (
    <div>
        <h3 className='fw-bold text-center mt-5 fs-2'>Piramal Since 1980</h3>
        <h5 className='fw-normal text-center'>A name you can trust</h5>
        <div className='d-flex justify-content-evenly flex-wrap mt-3 '>
            <div className='col-lg-3 col-12 col-md-6 text-center mt-3'>
                <img src={hand} alt="" height={80}  />
                <h6 className='fs-5 fw-normal mt-3'>Parentage of</h6>
                <h5 className='fw-bold mt-3 fs-5'>40+ years</h5>
            </div>
            <div className='col-lg-3 col-12 col-md-6 text-center mt-3'>
                <img src={more} alt="" height={80}  />
                <h6 className='fs-5 fw-normal mt-3'>More than</h6>
                <h5 className='fw-bold mt-3 fs-5'>26 Lac+ Customers</h5>
            </div>
            <div className='col-lg-3 col-12 col-md-6 text-center mt-3'>
                <img src={presence} alt="" height={80}  />
                <h6 className='fs-5 fw-normal mt-3'>Presence in</h6>
                <h5 className='fw-bold mt-3 fs-5'>425+ Locations</h5>
            </div>
            <div className='col-lg-3 col-10 col-md-6 text-center mt-3'>
                <img src={prtener} alt="" height={80}  />
                <h6 className='fs-5 fw-normal mt-3'>More than</h6>
                <h5 className='fw-bold mt-3 fs-5'>5K+ Parteners Outlets</h5>
            </div>
        </div>
        <p className='text-center mt-5 fs-4 text-secondary'>On Media</p>
        <div className='container text-center d-flex flex-wrap justify-content-evenly '>
         <img src={economic} alt="" className='col-lg-2 mt-2'  />
         <img src={finance} alt="" className='col-lg-2 mt-4'/>
         <img src={bloom} alt=""  className='col-lg-2 mt-4'/>
        </div>
    </div>
  )
}

export default Since