import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Content from '../../components/Content/Content'
import ContactCon from '../../components/contactCon/ContactCon'

const Home = () => {
  return (
    <div>
      
        <Carousel/>
        <FeaturedProducts/>
        <Content/>
        <ContactCon/>
    </div>
  )
}

export default Home