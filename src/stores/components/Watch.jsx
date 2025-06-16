

import React from 'react'
import {watchData} from '../data/watch'
import '../../App.css'
import { Link } from 'react-router-dom';

const Watch = () => {
    const firstImages = watchData.slice(0,5);
  return (
    <>
    <div className="proTitle">
      <Link to="/watch" className='proName'>
    <h2>Watch</h2>
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

export default Watch
