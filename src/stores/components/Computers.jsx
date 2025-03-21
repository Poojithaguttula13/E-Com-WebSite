

import React from 'react'
import {computerData} from '../data/computers'
import './Mobiles.css'

const Computers = () => {

    const firstImages = computerData.slice(0,5);

  return (

    <>
    <h2>Computers</h2>
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
