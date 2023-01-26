import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Content from '../../components/Content/Content'

const Home = () => {
  return (
    <div>
        <Carousel/>
        <FeaturedProducts/>
        <Content/>
    </div>
  )
}

export default Home