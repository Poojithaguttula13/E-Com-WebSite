

import React from 'react'
import {womanData} from '../data/woman'
import './Mobiles.css'

const Woman = () => {
    const firstImages = womanData.slice(0,5);
  return (
    <>
    <div className="proTitle">
    <h2>Woman</h2>
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

export default Woman
