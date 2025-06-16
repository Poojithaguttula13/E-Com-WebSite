


import React, { useState } from 'react'
import { booksData } from '../data/books'
import '../../App.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const BookPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([]);

    const companyHandler = (author) => {
        if(selectedProduct.includes(author)){
            setSelectedProduct(selectedProduct.filter(item => item !== author))
        }
        else {
            setSelectedProduct([...selectedProduct, author])
        }
    }

    const filteredProduct = selectedProduct.length === 0 ? booksData : booksData.filter((lengths)=>selectedProduct.includes(lengths.author))

  return (
   <>
   <Navbar />

    <div className="fullpage">
    <div className="pro-selected">
    {booksData.map((phone) => {
        return(
            <div className='pro-input'>
                <label>
                    <input type="checkbox" checked ={selectedProduct.includes(phone.author)}
                    onChange={() => companyHandler(phone.author)}
                    />
                    {phone.author}
                </label>
            </div>
        )
    })}
</div>
<div className="pageSection">
    {filteredProduct.map((item)=>{
        return(
            <div>
                <Link to={`/book/${item.id}`}>
                <div className="pageImg">
                    <img src={item.image} alt="" />
                </div>
                </Link>
                <div className="proModel" style={{marginTop:'35%'}}>
                    {item.title},{item.author}
                </div>
            </div>
        )
    })}
   </div>
    </div>
   </>
  )
}

export default BookPage





// import React from 'react'
// import { booksData } from '../data/books'
// import '../components/Mobiles.css'
// import Navbar from '../components/Navbar'
// import { Link } from 'react-router-dom'

// const BookPage = () => {
//   return (
//    <>
//    <Navbar />
//    <div className="pageSection">
//     {booksData.map((item)=>{
//         return(
//             <div>
//                 <Link to={`/book/${item.id}`}>
//                 <div className="pageImg">
//                     <img src={item.image} alt="" />
//                 </div>
//                 </Link>
//                 <div className="proModel">
//                     {item.title},{item.author}
//                 </div>
//             </div>
//         )
//     })}
//    </div>
//    </>
//   )
// }

// export default BookPage
