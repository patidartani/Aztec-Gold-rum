import React from 'react'
import "./PiramalApp.css"
import GooglePlayLogo from "../assets/images/PlayStore.webp"
import AppStoreLogo from "../assets/images/appStoreBadge.webp"

const PiramalApp = () => {
  return (
    <div className='PiramalApp'>
          <div className="App">
                 <div className="DownloadApp">
                       <div className="text">
                              <h4>Download Piramal App</h4>
                              <p>Apply Loan Any Time, From Any Place.</p>
                              <div className="buton">
                              <button className="googlePlayButton">
                <a href="link-to-google-play">
                  <img src={GooglePlayLogo} alt="Google Play" />
                </a>
              </button>
              <button className="appStoreButton">
                <a href="link-to-app-store">
                  <img src={AppStoreLogo} alt="App Store" />
                </a>
              </button>
                              </div>
                       </div>
                    </div>     
          </div>
    </div>
  )
}

export default PiramalApp