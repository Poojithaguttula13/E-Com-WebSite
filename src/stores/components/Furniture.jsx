

import React from 'react'
import {furnitureData} from '../data/furniture'
import '../../App.css'
import { Link } from 'react-router-dom';

const Furniture = () => {
    const firstImages = furnitureData.slice(0,5);
  return (
    <>
    <div className="proTitle">
      <Link to="/furniture" className='proName'>
    <h2>Furniture</h2>
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

export default Furniture
