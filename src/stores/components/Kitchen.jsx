

import React from 'react'
import {kitchenData} from '../data/kitchen'
import '../../App.css'
import { Link } from 'react-router-dom';

const Kitchen = () => {
    const firstImages = kitchenData.slice(0,5);
  return (
    <>
    <div className="proTitle">
      <Link to="/kitchen" className='proName'>
    <h2>Kitchen</h2>
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

export default Kitchen
