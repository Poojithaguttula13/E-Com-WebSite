

import React from 'react'
import {fridgeData} from '../data/fridge'
import '../../App.css'
import { Link } from 'react-router-dom';

const Fridge = () => {
    const firstImages = fridgeData.slice(0,5);
  return (
    <>
    <div className="proTitle">
      <Link to="/fridge" className='proName'>
    <h2>Fridge</h2>
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

export default Fridge
