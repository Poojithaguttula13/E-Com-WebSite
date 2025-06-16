

import React from 'react'
import {mobileData} from '../data/mobiles'
import '../../App.css'
import { Link } from 'react-router-dom';

const Mobiles = () => {
    const firstImages = mobileData.slice(0,5);
  return (
    <>
    <div className="proTitle">
      <Link to="/mobile" className='proName'>
    <h2>Mobiles</h2>
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

export default Mobiles
