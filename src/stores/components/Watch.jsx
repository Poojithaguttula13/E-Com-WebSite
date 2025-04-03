

import React from 'react'
import {watchData} from '../data/watch'
import '../../App.css'

const Watch = () => {
    const firstImages = watchData.slice(0,5);
  return (
    <>
    <div className="proTitle">
    <h2>Watch</h2>
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

export default Watch
