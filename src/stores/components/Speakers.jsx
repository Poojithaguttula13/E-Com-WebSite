

import React from 'react'
import {speakerData} from '../data/speaker'
import '../../App.css'

const Speakers = () => {
    const firstImages = speakerData.slice(0,5);
  return (
    <>
    <div className="proTitle">
    <h2>Speakers</h2>
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

export default Speakers
