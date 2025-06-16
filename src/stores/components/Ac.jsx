

import React from 'react'
import {acData} from '../data/ac'
import '../../App.css'
import { Link } from 'react-router-dom';

const Ac = () => {
    const firstImages = acData.slice(0,5);
  return (
    <>
    <div className="proTitle">
    <Link to="/ac" className='proName'><h2>Air Conditioner</h2></Link>
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
