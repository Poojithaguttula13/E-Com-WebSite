

import React from 'react'
import {computerData} from '../data/computers'
import '../../App.css'
import { Link } from 'react-router-dom';

const Computers = () => {

    const firstImages = computerData.slice(0,5);

  return (

    <>
    <div className="proTitle">
      <Link to="/computer" className='proName'>
    <h2>Computers</h2>
      </Link>
    </div>
    <div className='proSection'>
      {
        firstImages.map((item) => {
            return(
                <div className='ImageBox'>
                    <img className='proImage' src={item.image} alt="" />
                </div>
            )
        })
      }
    </div>
    </>
  )
}

export default Computers
