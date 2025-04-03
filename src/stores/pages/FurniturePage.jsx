
import React, { useState } from 'react'
import { furnitureData } from '../data/furniture'
import '../../App.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const FurniturePage = () => {

    const [selectedProduct, setSelectedProduct] = useState([]);

    const companyHandler = (brand) => {
        if(selectedProduct.includes(brand)){
            setSelectedProduct(selectedProduct.filter(item => item !== brand))
        }
        else {
            setSelectedProduct([...selectedProduct, brand])
        }
    }

    const filteredProduct = selectedProduct.length === 0 ? furnitureData : furnitureData.filter((lengths)=>selectedProduct.includes(lengths.brand))

  return (
   <>
   <Navbar />

    <div className="fullpage">
    <div className="pro-selected">
    {furnitureData.map((phone) => {
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
                <Link to={`/furniture/${item.id}`}>
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

export default FurniturePage
