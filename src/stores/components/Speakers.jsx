

import React from 'react'
import {speakerData} from '../data/speaker'
import '../../App.css'
import { Link } from 'react-router-dom';

const Speakers = () => {
    const firstImages = speakerData.slice(0,5);
  return (
    <>
    <div className="proTitle">
      <Link to="/speaker" className='proName'>
    <h2>Speakers</h2>
      </Link>
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
