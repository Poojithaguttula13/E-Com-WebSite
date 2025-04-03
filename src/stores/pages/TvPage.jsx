
import React, { useState } from 'react'
import { tvData } from '../data/tv'
import '../../App.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const TvPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([]);

    const companyHandler = (brand) => {
        if(selectedProduct.includes(brand)){
            setSelectedProduct(selectedProduct.filter(item => item !== brand))
        }
        else {
            setSelectedProduct([...selectedProduct, brand])
        }
    }

    const filteredProduct = selectedProduct.length === 0 ? tvData : tvData.filter((lengths)=>selectedProduct.includes(lengths.brand))

  return (
   <>
   <Navbar />

    <div className="fullpage">
    <div className="pro-selected">
    {tvData.map((phone) => {
        return(
            <div className='pro-input'>
                <label>
                    <input type="checkbox" checked ={selectedProduct.includes(phone.brand)}
                    onChange={() => companyHandler(phone.brand)}
                    />
                    {phone.brand}
                </label>
            </div>
        )
    })}
</div>
<div className="pageSection">
    {filteredProduct.map((item)=>{
        return(
            <div>
                <Link to={`/tv/${item.id}`}>
                <div className="pageImg">
                    <img src={item.image} alt="" />
                </div>
                </Link>
                <div className="proModel">
                    {item.brand},{item.model}
                </div>
            </div>
        )
    })}
   </div>
    </div>
   </>
  )
}

export default TvPage
