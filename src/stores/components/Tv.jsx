

import React from 'react'
import {tvData} from '../data/tv'
import '../../App.css'
import { Link } from 'react-router-dom';

const Tv = () => {
    const firstImages = tvData.slice(0,5);
  return (
    <>
    <div className="proTitle">
      <Link to="/tv" className='proName'>
    <h2>TV</h2>
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

export default Tv
