

import React from 'react'
import {booksData} from '../data/books'
import '../../App.css'

const Books = () => {
    const firstImages = booksData.slice(0,5);
  return (
    <>
    <div className="proTitle">
    <h2>Books</h2>
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

export default Books
