

import React from 'react'
import {tvData} from '../data/tv'
import './Mobiles.css'

const Tv = () => {
    const firstImages = tvData.slice(0,5);
  return (
    <>
    <div className="proTitle">
    <h2>TV</h2>
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

export default Tv
