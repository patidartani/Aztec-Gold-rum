import React from 'react'
import Navbar from '../component/Navbar'
import PiramalSlider from '../component/PiramalSlider'
import Pirahome from '../component/Pirahome'
import Since from '../component/Since'
import HomeCourses from '../component/HomeCourses'
import Pirawhy from '../component/Pirawhy'
import ExistingCustomer from '../component/ExistingCustomer'
import PiramalApp from '../component/PiramalApp'

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <PiramalSlider/>
        <Pirahome/>
        <PiramalApp/>
        <Since/>
        <Pirawhy/>
        <ExistingCustomer/>
        <HomeCourses/>
    </div>
  )
}

export default Homepage