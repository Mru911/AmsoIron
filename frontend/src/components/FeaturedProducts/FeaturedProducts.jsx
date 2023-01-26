import React from 'react'
import './featuredproducts.css'

const FeaturedProducts = () => {
  return (
    <div className='fpro'>
            <h1 className='text-3xl font-bold mt-6'>Featured Quality Products</h1>

      <div className="">
  <div className=" ">
    <div className="">
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
  </div>
</div>
 <section>
  <div className="portfolio">
    <div className="item">
      <img src={require('./../../assets/3.png')}/>
      <div class="action">
                    <a href="#">Single Door</a>
                </div>
    </div>
    <div className="item">
      <img src={require('./../../assets/1.png')}/>
      <div class="action">
                    <a href="/products">Double Door</a>
                </div>
    </div>
    <div className="item">
      <img src={require('./../../assets/4.png')}/>
      <div class="action">
                    <a href="#">Single Door</a>
                </div>
    </div>
    <div className="item">
      <img src={require('./../../assets/5.png')}/>
      <div class="action">
                    <a href="#">Single Door</a>
                </div>
    </div>
    <div className="item">
      <img src={require('./../../assets/6.png')}/>
      <div class="action">
                    <a href="#">Single Door</a>
                </div>
    </div>
    <div className="item">
      <img src={require('./../../assets/10.png')}/>
      <div class="action">
                    <a href="#">Single Door</a>
                </div>
    </div>
  </div>
 </section>
        <div className="titlefp">
        </div>
       
    </div>
  )
}

export default FeaturedProducts