

import React from 'react'
import {mobileData} from '../data/mobiles'
import './Mobiles.css'

const Mobiles = () => {
    const firstImages = mobileData.slice(0,5);
  return (
    <div className='proSection'>
      {
        firstImages.map((item) => {
            return(
                <div className='imageBox'>
                    <img className='proImage' src={item.image} alt="" />
                </div>
            )
        })
      }
    </div>
  )
}

export default Mobiles
