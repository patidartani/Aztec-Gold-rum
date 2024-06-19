import React from 'react'
import "./Home.css"
import main1Img from "../assets/flashform image1.png"
import LogoFlash from "../assets/logo_flash-.png"
import Video1 from "../assets/1.mp4"

const Home = () => {
  return (
    <div >
   <div id="main">
    <h1>We<span>'re</span> just <br /> sending <br /> forms</h1>
    <p>WE ARE NOT A FORM BUILDER. WE DO NOT SEEK TO  <br /> SOLVE ALL PROBLEMS. WE JUST SEND FORM DATA TO INSTANT  <br />
      MESSENGERS AND EMAIL IN THE MOST CONVENIENT WAY</p>
    <img src={main1Img} alt="" />
    <div className="logo">
      <img width="80px" height="80px" src="https://abled.com/wp-content/uploads/2020/07/Globe-Green-150x150.png" alt="" />
      <h5><a href="/">[ <span>TRY NOW</span> ]</a></h5>
    </div>
    <h2>and that’s all</h2>
  </div>

  <div className="container" >
    <div id="nav" >
      <div className="LOGO"><img width="50px" height="50px" src={LogoFlash} alt="" />Flashform</div>
      <div className="navs">
        <ul>
          <li><a href="/">WHY FLASHFORM</a></li>
          <li><a href="/">INTEGRATION</a></li>
          <li><a href="/">BENEFITS</a></li>
          <li><a href="/">ROADMAP</a></li>
          <li><a href="/">FAQ</a></li>
          <li><a href="/">JOIN THE BETA<i className="ri-arrow-go-forward-fill"></i></a></li>
        </ul>
      </div>
    </div>
     
    <div id="content">
      <div className="page1">
        <div className="left" data-aos="zoom-in">
          <video autoplay loop muted width="500px" height="500px" src={Video1}></video>
         </div>
        <div className="right">
          <h1 data-aos="fade-left">What does <br /> it mean <span>Flashform?</span></h1>
          <p><span>THIS IS A SIMPLY-USE SERVICE, WHICH ALLOWS TO YOU</span><br /> CONFIGURE THE SENDING OF CONTACT FORMS
            FROM YOUR WEBSITE TO <br /> SELECTED MESSENGERS IN A FEW CLICKS</p>
        </div>
      </div>

         



      
</div>
</div>
</div>
  )
}

export default Home