import React from 'react'
import "./ExistingCustomer.css"
import ExistingCustomer1 from "../assets/images/ExistingCustomer1.svg"
import ExistingCustomer2 from "../assets/images/ExistingCustomer2.svg"
import ExistingCustomer3 from "../assets/images/ExistingCustomer3.svg"
import ExistingCustomer4 from "../assets/images/ExistingCustomer4.svg"


const ExistingCustomer = () => {
  return (
    <div className='ExistingCustomer'>
              <div className="Existing">
                         <h4>Our care extends for the Existing Customer</h4>
                         <p>Having a busy work schedule? Manage & keep track of your Home Loan online. We make things easier even after loan disbursal. Our existing customers can benefit from our services after disbursal, as they can:</p>
                         <div className="last">
                              <div className="box">
                                         <img src={ExistingCustomer1} alt="" />
                                        <h6>Get Loan Interested Certificate</h6>
                              </div>
                              <div className="box">
                              <img src={ExistingCustomer2} alt="" />
                                        <h6>Get Provisional Statement</h6>
                              </div>
                              <div className="box">
                              <img src={ExistingCustomer3} alt="" />
                                        <h6>Request To Chaneg EMI Cycle & Contact Details</h6>
                              </div>
                              <div className="box">
                              <img src={ExistingCustomer4} alt="" />
                                        <h6>Request For Credit Information Report & Repayment Details</h6>
                              </div>
                         </div>
              </div>
    </div>
  )
}

export default ExistingCustomer