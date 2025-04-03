

import React from 'react'
import {menData} from '../data/men'
import '../../App.css'

const Men = () => {
    const firstImages = menData.slice(0,5);
  return (
    <>
    <div className='proTitle'>
    <h2>Men</h2>
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

export default Men
