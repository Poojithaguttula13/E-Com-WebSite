

import React from 'react'
import {acData} from '../data/ac'
import '../../App.css'

const Ac = () => {
    const firstImages = acData.slice(0,5);
  return (
    <>
    <div className="proTitle">
    <h2>Air Conditioner</h2>
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

export default Ac
