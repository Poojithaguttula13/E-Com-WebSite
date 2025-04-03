

import React from 'react'
import {furnitureData} from '../data/furniture'
import '../../App.css'

const Furniture = () => {
    const firstImages = furnitureData.slice(0,5);
  return (
    <>
    <div className="proTitle">
    <h2>Furniture</h2>
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

export default Furniture
