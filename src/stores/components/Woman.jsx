
import React from 'react'
import {womanData} from '../data/woman'
import '../../App.css'
import { Link } from 'react-router-dom';

const Woman = () => {
    const firstImages = womanData.slice(0,5);
  return (
    <>
    <div className="proTitle">
      <Link to="/women" className='proName'>
    <h2>Woman</h2>
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

export default Woman
