import React from 'react'
import "./PiramalSlider.css"
import PiramalSliderImg1 from "../assets/images/PiramalSliderImg1.webp"
import PiramalSliderImg2 from "../assets/images/PiramalSliderImg2.webp"
import PiramalSliderImg3 from "../assets/images/PiramalSliderImg3.webp"
import PiramalSliderImg4 from "../assets/images/PiramalSliderImg4.webp"


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PiramalSlider = () => {
          const settings = {
                    dots: true,
                    infinite: true,
                    speed: 1000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    prevArrow: null, 
                    nextArrow: null, 
                    autoplaySpeed: 2000, 
                    appendDots: dots => (
                      <div
                       style={{position:"absolute" ,bottom:"0vmax",marginLeft:"15vmax"}}
                    
                       >
                        <ul >{dots}</ul>
                      </div>
                    ),

                  };
               
                  const slidesData = [
                    {
                              image: PiramalSliderImg1,
                              heading: 'Instant Personal Loan in Minutes',
                      content: 'From dream wedding to gadgets and school fees, our personal loan is your go-to forr immediate financial needs.',
                      button: 'Check Your Offer',
                      color:"#def3fd",
                    },
                    {
                              image: PiramalSliderImg2,
                              heading: 'Great Place to Work & ET Best Brands Certified',
                      content: 'Unlock your potential with an organisation that is',
                      button: 'Explore opportunity',
                      color:"#663d86",
                      bgcolor:"white"
                    },
                    {
                              image:PiramalSliderImg3 ,
                              heading: 'Gift a Dream Home To Your Loved Ones',
                      content: 'Piramal Capital & Housing Finance Ltd. (Piramal Finance)offers home loan for everyone, with hassle free process,convinient. EMIs & flexible loan tenure',
                      button: 'Apply Loan Now',
                      color:"#fef0ec",
                    },
                    {
                              image: PiramalSliderImg4,
                              heading: 'Download Piramal Finance App',
                      content: 'Apply loan anytime, from any place, Track your loan aplication, & get FREE credit Report.',
                      button: ' Google play',
                      color:"#ba5a73",
                      bgcolor:"white"
                    },
                  ];


  return (
          <div className="PiramalSlider">
      <div className="Slider" >
        <div className="slider-container">
          <Slider {...settings}>
            {slidesData.map((slide, index) => (
              <div className='slidescroll'>
              <div key={index} className="slide d-flex" style={{backgroundColor:`${slide.color}`,color:`${slide.bgcolor}`}}>
                <div className="slide-content" >
                  <h2>{slide.heading}</h2>
                  <p>{slide.content}</p>
                  <button>{slide.button}</button>
                </div>
                <div className="slide-image">
                  <img src={slide.image} alt={`Slide ${index}`} />
                </div>
              </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default PiramalSlider

// import React from 'react'

// const PiramalSlider = () => {
//   return (
//     <div>
//           <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
//         <div class="carousel-inner">
//           <div class="carousel-item active">
//             <img src="https://images.unsplash.com/photo-1691539706978-3cb89d88915f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="..." style={{ height: "30vmax", objectFit: "cover" }} />
//           </div>
//           <div class="carousel-item">
//             <img src="https://images.unsplash.com/photo-1691524134961-6b2d6a3ba2ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="..." style={{ height: "30vmax", objectFit: "cover" }} />
//           </div>
//           <div class="carousel-item">
//             <img src="https://images.unsplash.com/photo-1691606006494-9cfda1210d16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="..." style={{ height: "30vmax", objectFit: "cover" }} />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PiramalSlider
