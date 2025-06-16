

import React from 'react'
import {booksData} from '../data/books'
import '../../App.css'
import { Link } from 'react-router-dom';

const Books = () => {
    const firstImages = booksData.slice(0,5);
  return (
    <>
    <div className="proTitle">
      <Link to="book" className='proName'>
    <h2>Books</h2>
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

export default Books
