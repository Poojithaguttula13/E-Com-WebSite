

import React from 'react'
import {mobileData} from '../data/mobiles'
import '../../App.css'

const Mobiles = () => {
    const firstImages = mobileData.slice(0,5);
  return (
    <>
    <div className="proTitle">
    <h2>Mobiles</h2>
    </div>
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
    </>
  )
}

export default Mobiles
